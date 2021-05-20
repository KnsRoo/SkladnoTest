<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_models', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('title', 255);
            $table->string('picturePath', 255);
            $table->text('text');
            $table->boolean('visible');
            $table->dateTime('publicationDate');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news_models');
    }
}
