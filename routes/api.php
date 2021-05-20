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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');

    Route::post('registration', 'AuthController@registration');

    Route::post('logout', 'AuthController@logout');

    Route::post('refresh', 'AuthController@refresh');

    Route::post('me', 'AuthController@me');
});

Route::group([
	'middleware' => ['api'],
	'prefix' => 'news'
], function(){
    Route::resource('news', 'NewsController');

    Route::get('/', 'NewsController@getNews')->name('api:news:get');

    Route::get('get/{id}', 'NewsController@getNew')->name('api:new:get');

    Route::post('create', 'NewsController@createNew')->name('api:new:create');

    Route::post('update/{id}', 'NewsController@updateNew');

    Route::delete('delete/{id}', 'NewsController@deleteNew');
});