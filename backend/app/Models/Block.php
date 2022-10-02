<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model {
    use HasFactory;

    public function BlockingUser(){
        return $this->belongsTo(User::class, "blocking_id");
    }

    public function BlockedUser(){
        return $this->belongsTo(User::class, "blocked_id");
    }

}
