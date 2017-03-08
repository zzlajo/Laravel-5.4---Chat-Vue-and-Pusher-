<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Events\MessagePosted;


class ChatController extends Controller
{

    public function getAllMessage()
    {
        return view('chat');
    }

    public function getMessage()
    {
        return \App\Message::with('user')->get();
    }

    public function saveMessage(Request $request)
    {

        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->message,
        ]);

//    event(new MessagePosted($message, $user));
        broadcast(new MessagePosted($message, $user))->toOthers();

        return ['status' => 'ok'];

    }


}
