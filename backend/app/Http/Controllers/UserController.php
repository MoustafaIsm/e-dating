<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Block;

class UserController extends Controller {
    
    function getAllUsers () {
        return $users = User::select('id')
                            ->where('id', 1)
                            ->with('Profile')
                            ->with('BlockedUsers')
                            ->get();
    }

    function getIntrestedIn($id, $intrestedIn) {
        $usersToDsiplay = User::where('gender', 'like', '%' . $intrestedIn . '%')
                                ->where('id', '!=', $id)
                                ->get();
        return response()->json([
            'status' => 'success',
            'result' => $usersToDsiplay
        ]);
    }

    function getFavorites($id) {
        $favorites = Favorite::where('user_id', $id)
                            ->with('FavoritedInfo')
                            ->get();
        return response()->json([
            'status' => 'success',
            'result' => $favorites
        ]);
    }

    function addFavorite($id, $favoritedId) {
        $favorite = new Favorite;
        $favorite->user_id = $id;
        $favorite->favorited_id = $favoritedId;
        
        if ($favorite->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

    function removeFavorite($id, $favoritedId) {
        $delete = Favorite::where('user_id', $id)
                            ->where('favorited_id', $favoritedId)
                            ->delete();
        if ($delete) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

} 