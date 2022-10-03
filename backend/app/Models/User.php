<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject {

    use HasFactory, Notifiable;

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'location',
        'age',
        'gender',
        'intrested_in'
    ];

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
