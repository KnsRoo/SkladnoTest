<?php

use Illuminate\Http\Request;
use Http\Controllers\NewsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function(){
    Route::resource('news', 'NewsController');

    Route::get('news', 'NewsController@getNews')->name('api:news:get');

    Route::get('news/get/{id}', 'NewsController@getNew')->name('api:new:get');

    Route::post('news/create', 'NewsController@createNew');

    Route::post('news/update/{id}', 'NewsController@updateNew');

    Route::delete('news/{id}', 'NewsController@deleteNew');
});