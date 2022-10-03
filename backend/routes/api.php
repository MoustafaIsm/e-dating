<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::prefix('user')->group(function () {

    // Route::group(["middleware" => "auth:api"], function(){

        Route::get('/intrested/{id}/{intrestedIn}', [UserController::class, 'getIntrestedIn']);

        Route::prefix('favorites')->group(function () {
            Route::get('/get_favorites/{id}', [UserController::class, 'getFavorites']);
            Route::get('/add_favorites/{id}/{favoritedId}', [UserController::class, 'addFavorite']);
            Route::get('/remove_favorites/{id}/{favoritedId}', [UserController::class, 'removeFavorite']);
        });

        Route::prefix('blocks')->group(function () {
            Route::get('/add_block/{id}/{blocked_id}', [UserController::class, 'addBlock']);
        });

        Route::prefix('messages')->group(function () {
            Route::get('/get_messages/{id}', [UserController::class, 'getMessages']);
            Route::post('/add_message', [UserController::class, 'addMessage']);
        });
    // });
    
});

Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);
Route::get("/not_found", [AuthController::class, 'notFound'])->name('not-found');






