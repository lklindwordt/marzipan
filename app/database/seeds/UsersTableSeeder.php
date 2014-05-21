<?php

class UsersTableSeeder extends Seeder {
  public function run() {
    DB::table('users')->insert(array(
      array('id' => 1, 'email' => 'admin@marzipan.io', 'password' => 'marzipan', 'firstname' => 'Admin', 'lastname' => 'Marzipan', 'date_of_birth' => '2014-05-21')
    ));
  }
}
