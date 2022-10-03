<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::prefix('user')->group(function () {

    Route::get('/intrested/{id}/{intrestedIn}', [UserController::class, 'getIntrestedIn']);
    
});

Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);






