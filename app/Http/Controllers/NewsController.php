<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewsRequest;
use App\Exceptions\Handler;
use App\NewsModel;
use App\Http\Middleware\HAL;
use Illuminate\Http\JsonResponse;
use Exception;

class NewsController extends Controller
{
    private const OFFSET = 0;
    private const LIMIT = 6;
    private const UPLOADS_DIR = 'uploads';

    /**
     * Save new in database
     *
     * @param  \App\NewsModel $new
     * @param  App\Http\Requests\NewsRequest $req
     *
     * @return \Illuminate\Http\JsonResponse
     */
    private function saveItem($new, $req){
        $new->fill($req->validated());

        if ($req->publicationDate){
           $new->publicationDate =  $req->publicationDate;
        }

        $file = $req->file('file');

        if ($file){
            $name = uniqid()."_".$file->getClientOriginalName();
            $file->move(self::UPLOADS_DIR,$name);
            $new->picturePath = url('/')."/{self::UPLOADS_DIR}/{$name}";
        }
        
        if (!$new->save()) Handler::error('Saving error', 422);

        return response()->json(['success' => 'success'], 200);
    }

    /**
     * Get all news. For authorized users.
     *
     * @param  Request $req
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getNews(Request $req){
        $offset = $req->input('offset') ?? self::OFFSET;
        $limit = $req->input('limit') ?? self::LIMIT;

        $qb = new NewsModel;

        // Last param sets a route must be returned
        return HAL::send($qb, $offset,$limit);
    }

    /**
     * Get only published news. For unauthorized users.
     *
     * @param  Request $req
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPublishedNews(Request $req){
        $offset = $req->input('offset') ?? self::OFFSET;
        $limit = $req->input('limit') ?? self::LIMIT;

        $qb = NewsModel::published();

        return HAL::send($qb, $offset,$limit);
    }

    /**
     * Get specific new by id.
     *
     * @param  String $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getNew($id){
        $new = NewsModel::where('id',(Integer)$id)
                ->first();

        if (!$new) return Handler::error('Not found');

        return $new;
    }

    /**
     * Create new.
     *
     * @param  \App\Http\Requests\NewsRequest $req
     *
     * @return \Illuminate\Http\JsonResponse
     */
	public function createNew(NewsRequest $req)
    {
        $new = new NewsModel;
        return $this->saveItem($new, $req);
    }

    /**
     * Update new.
     *
     * @param  \App\Http\Requests\NewsRequest $req
     * @param  String $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
	public function updateNew(NewsRequest $req, $id)
	{
        $new = NewsModel::where('id',(Integer)$id)
                ->first();

        if (!$new) return Handler::error('Not found');

        return $this->saveItem($new, $req);
	}

    /**
     * Delete new.
     *
     * @param  String $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
	public function deleteNew($id)
    {
        $new = NewsModel::findOrFail((Integer)$id);

        if (!$new->delete()) return Handler::error('Deleting error', 402);

        return response()->json(['success' => 'success'], 200);
    }
}
