<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::prefix('test')->group(function () {
    Route::get("/users", [UserController::class, "getAllUsers"])->name("get-all-users");
});

Route::post("/login", [AuthController::class, "login"]);

Route::post("/register", [AuthController::class, "register"]);


