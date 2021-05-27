<?php

namespace App\Http\Middleware;

class HAL
{
    /**
     * Format in hal+json.
     *
     * @param  \App\NewsModel $qb
     * @param  String $offset
     * @param  String $limit
     * @param  String $route
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public static function send($qb, $offset, $limit, $route = 'published'){

        $qbCnt = clone $qb;
        $count = $qbCnt->count();

        $result = $qb->skip($offset)
                 ->take($limit)
                 ->get();

        $result = [
            'total' => $count,
            'offset' => (Integer)$offset,
            'limit' => (Integer)$limit,
            '_links' => self::getLinks($offset,$limit,$count,$route),
            '_embedded' => [
                'items' => $result
            ] 
        ];

        $headers = [ 'Content-Type' => 'Application/hal+json'];

        return response()->json($result, 200, $headers, JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);
    }

    /**
     * Pagination links
     *
     * @param  \App\NewsModel $qb
     * @param  String $offset
     * @param  String $limit
     * @param  String $route
     *
     * @return Array
     */
    private static function getLinks($offset, $limit, $count, $route){
        
        $result = [];
        $result['self'] = route("api:{$route}:get", ['offset' => $offset, 'limit' => $limit]);

        if ($offset != 0){
            $prev = $offset - $limit;
            $result['prev'] = route("api:{$route}:get", ['offset' => $prev, 'limit' => $limit]);
        }

        if ($count > $offset + $limit){
            $next = $offset + $limit;
            $result['next'] = route("api:{$route}:get", ['offset' => $next, 'limit' => $limit]);
        }

        return $result;
    }
}