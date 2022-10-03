<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model {

    use HasFactory;

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function Profile() {
        return $this->hasOne(User::class, 'id');
    }

    public function BlockedUsers() {
        return $this->hasMany(Block::class, 'blocking_id');
    }

    public function FavoritedUsers() {
        return $this->hasMany(Favorite::class, 'user_id');
    }

}
