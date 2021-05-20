<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsRequest;
use Illuminate\Http\Request;
use App\NewsModel;
use Exception;

class NewsController extends Controller
{
    public function getNews(){
        $offset = $_GET['offset'] ?? 0;
        $limit = $_GET['limit'] ?? 6;

    	$qb = NewsModel::published();

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
                ->first();

        if (!$new) return response()->json(['message' => 'Not Found!'], 404);

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

    private function saveItem($new, $req){
        $new->fill($req->validated());

        if ($req->publicationDate){
           $new->publicationDate =  $req->publicationDate;
        }

        $file = $req->file('file');

        if ($file){
            $name = uniqid()."_".$file->getClientOriginalName();
            $file->move('uploads',$name);
            $new->picturePath = url('/')."/uploads/{$name}";
        }

        try{
            $new->save();
        }
        catch (Exception $e){
            return response()->json(['error' => $e], 402);
        }
        return response()->json(['message' => 'sucess!'], 200);
    }

	public function createNew(NewsRequest $req)
    {
        $new = new NewsModel;
        return $this->saveItem($new, $req);
    }

	public function updateNew(Request $req, $id)
	{
        $new = NewsModel::where('id',(Integer)$id)
                ->first();

        if (!$new) return response()->json(['message' => 'Not Found!'], 404);

        return $this->saveItem($new, $req);
	}

	public function deleteNew($id)
    {
        $new = NewsModel::findOrFail($id);
        try{
           $new->delete();
        }
        catch (Exception $e){
            return response()->json(['error' => $e], 402);
        }
        return response()->json(['message' => 'sucess!'], 200);
    }
}
