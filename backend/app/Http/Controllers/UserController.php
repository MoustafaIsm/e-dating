<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Block;
use App\Models\Message;

class UserController extends Controller {

    function getIntrestedIn() {
        $user = Auth::user();
        $usersToDsiplay = User::where('gender', 'like', '%' . $user->intrested_in . '%')
                                ->where('id', '!=', $user->id)
                                ->whereNotExists(function ($query) use ($user) {
                                    $query->select('blocked_id')
                                          ->from('blocks')
                                          ->where('blocked_id', 'users.id')
                                          ->where('blocking_id', $user->id)
                                          ->get();
                                })
                                ->toSql();
        return response()->json([
            'status' => 'success',
            'result' => $usersToDsiplay
        ]);
    }

    function getFavorites() {
        $user = Auth::user();
        $favorites = Favorite::where('user_id', $user->id)
                            ->with('FavoritedInfo')
                            ->get();
        return response()->json([
            'status' => 'success',
            'result' => $favorites
        ]);
    }

    function addFavorite($favoritedId) {
        $user = Auth::user();
        $favorite = new Favorite;
        $favorite->user_id = $user->id;
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

    function removeFavorite($favoritedId) {
        $user = Auth::user();
        $delete = Favorite::where('user_id', $user->id)
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

    function addBlock ($blockedId) {
        $user = Auth::user();
        $block= new Block;
        $block->blocking_id = $user->id;
        $block->blocked_id = $blockedId;

        if ($block->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

    function getMessages () {
        $user = Auth::user();
        $messagesSentByTheUser = Message::where('sent_by_id', $user->id)
                                    ->with('RecieverInfo')
                                    ->get();
        $messagesSentToTheUser = Message::where('recieved_by_id', $user->id)
                                    ->with('SenderInfo')
                                    ->get();

        return response()->json([
            'status' => 'success',
            'results' => [
                'messagesSentByUser' => $messagesSentByTheUser,
                'messagesSentToUser' => $messagesSentToTheUser
            ]
        ]);
    }

    function addMessage (Request $request) {
        $user = Auth::user();
        $message = new Message;
        $message->message = $request->message;
        $message->sent_by_id = $user->id;
        $message->recieved_by_id = $request->recieved_by_id;

        if ($message->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

} 