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
        $limit = $_GET['limit'] ?? 5;

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

	public function createNew(Request $req)
    {
        $req->validate([
          'title' => 'required|string',
          'text' => 'required',
          'visible' => 'required|boolean',
        ]);
        $new = new NewsModel;
        $new->title = $req->title;
        $new->text = $req->text;
        $new->visible = $req->visible;
        if ($req->publicationDate){
            $new->publicationDate = $req->publicationDate;
        }
        try{
            $new->save();
        }
        catch (Exception $e){
            return response()->json(['error' => $e], 402);
        }
        return response()->json(['message' => 'sucess!'], 200);
    }

	public function updateNew(Request $req, $id)
	{

        $req->validate([
          'title' => 'required|string',
          'text' => 'required',
          'visible' => 'required|boolean',
        ]);

        $new = NewsModel::where('id',(Integer)$id)
                ->first();

        if (!$new) return response()->json(['message' => 'Not Found!'], 404);

        $new->fill([ 'title' => $req->title,
                     'text' => $req->text,
                     'visible' => $req->visible
                    ]);
        if ($req->publicationDate){
           $new->fill([ 'publicationDate' => $req->publicationDate
                    ]);
        }
        try{
            $new->save();
        }
        catch (Exception $e){
            return response()->json(['error' => $e], 402);
        }
		return response()->json(['message' => 'sucess!'], 200);
	}

	public function deleteNew($id)
    {
        $new = NewsModel::findOrFail($id);
        try{
           $new->delete() 
        }
        catch (Exception $e){
            return response()->json(['error' => $e], 402);
        }
        return response()->json(['message' => 'sucess!'], 200);
    }
}
