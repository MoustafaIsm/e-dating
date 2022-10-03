<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Block;

class UserController extends Controller {
    
    function getAllUsers () {
        return $users = User::select('id')->where('id', 1)->with('Profile')->with('BlockedUsers')->get();
    }
}
