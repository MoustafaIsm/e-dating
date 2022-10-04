<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model {

    use HasFactory;

    public function SenderInfo() {
        return $this->hasOne(User::class, 'id', 'sent_by_id');
    }

    public function RecieverInfo() {
        return $this->hasOne(User::class, 'id', 'recieved_by_id');
    }

}
