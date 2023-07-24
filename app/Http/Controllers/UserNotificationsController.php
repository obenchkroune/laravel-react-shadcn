<?php

namespace App\Http\Controllers;

class UserNotificationsController extends Controller
{
    public function index()
    {
        return inertia('Notifications');
    }
}
