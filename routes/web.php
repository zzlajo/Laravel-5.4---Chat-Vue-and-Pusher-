<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'Auth\LoginController@showLoginForm');


Route::get('chat', 'ChatController@getAllMessage')->middleware('auth');


Route::get('messages', 'ChatController@getMessage')->middleware('auth');


Route::post('messages', 'ChatController@saveMessage')->middleware('auth');


Auth::routes();

Route::get('/home', 'HomeController@index');
