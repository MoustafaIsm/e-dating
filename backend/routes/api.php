<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::group(["middleware" => "cors"], function(){

    Route::prefix('user')->group(function () {

        Route::group(["middleware" => "auth:api"], function(){
    
            Route::get('/intrested', [UserController::class, 'getIntrestedIn']);
    
            Route::prefix('favorites')->group(function () {
                Route::get('/get_favorites', [UserController::class, 'getFavorites']);
                Route::get('/add_favorites/{favoritedId}', [UserController::class, 'addFavorite']);
                Route::get('/remove_favorites/{favoritedId}', [UserController::class, 'removeFavorite']);
            });
    
            Route::prefix('blocks')->group(function () {
                Route::get('/add_block/{blocked_id}', [UserController::class, 'addBlock']);
            });
    
            Route::prefix('messages')->group(function () {
                Route::get('/get_messages', [UserController::class, 'getMessages']);
                Route::post('/add_message', [UserController::class, 'addMessage']);
            });
        });
        
    });
    
    Route::prefix('auth')->group(function () {
    
        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);
        Route::get("/not_auth", [AuthController::class, 'notAuth'])->name('not-auth');
    
    });

});
