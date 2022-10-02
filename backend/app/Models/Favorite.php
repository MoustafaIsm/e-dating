<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model {
    use HasFactory;

    public function User(){
        return $this->belongsTo(User::class, "user_id");
    }

    public function FavoritedUser(){
        return $this->belongsTo(User::class, "favorited_id");
    }

}
