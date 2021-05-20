<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsRequest;
use App\NewsModel;

class NewsController extends Controller
{
    public function getNews(){
        $offset = $_GET['offset'] ?? 0;
        $limit = $_GET['limit'] ?? 5;

    	$qb = NewsModel::where('visible',1)
                ->where('publicationDate', '<=', date('Y-m-d H:i:s'));

        $qbCnt = clone $qb;
        $count = $qbCnt->count();

        $result = $qb->skip($offset)
                 ->take($limit)
                 ->get();

        return response()->json([
            'total' => $count,
            'offset' => $offset,
            'limit' => $limit,
            '_links' => $this->getLinks($offset,$limit,$count),
            '_embedded' => [
                'items' => $result
            ] 
        ]);

    }

    public function getNew($id){
        $new = NewsModel::where('id',(Integer)$id)
                ->get();

        if ($new->isEmpty()) return response()->json(['message' => 'Not Found!'], 404);

        return $new;
    }

    private function getLinks($offset,$limit, $count){
        $result = [];
        $result['self'] = route('api:news:get', ['offset' => $offset, 'limit' => $limit]);
        if ($offset != 0){
            $prev = $offset - $limit;
            $result['prev'] = route('api:news:get', ['offset' => $prev, 'limit' => $limit]);
        }
        if ($count > $offset + $limit){
            $next = $offset + $limit;
            $result['next'] = route('api:news:get', ['offset' => $next, 'limit' => $limit]);
        }
        return $result;
    }

	public function createNew(NewsRequest $req)
    {
        $new = NewsModel::create($request->validated());
        return $new;
    }

	public function updateNew(NewsRequest $req, $id)
	{
		$new = NewsModel::findOrFail($id);
		$new->fill($request->except(['id']));
		$new->save();
		return response()->json($new);
	}

	public function deleteNew(NewsRequest $req, $id)
    {
        $new = NewsModel::findOrFail($id);
        if($new->delete()) return response(null, 204);
    }
}
