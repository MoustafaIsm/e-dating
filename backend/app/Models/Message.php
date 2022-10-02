<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model {
    use HasFactory;

    public function SentUser(){
        return $this->belongsTo(User::class, "sent_by_id");
    }

    public function ReceivedUser(){
        return $this->belongsTo(User::class, "recieved_by_id");
    }

}
