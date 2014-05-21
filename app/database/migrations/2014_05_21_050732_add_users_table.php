<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUsersTable extends Migration {

	public function up() {
		Schema::create('users', function($table){
			$table->increments('id');
			$table->string('email');
			$table->string('password');
			$table->string('firstname');
			$table->string('lastname');
			$table->date('date_of_birth');
			$table->date('deleted_at');
			$table->timestamps();
		});
	}

	public function down() {
		Schema::drop('users');
	}

}
