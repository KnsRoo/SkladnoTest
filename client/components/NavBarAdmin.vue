<template>
<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <div class="container-fluid">
    <nuxt-link class="navbar-brand" to="/">Лента новостей</nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <nuxt-link exact active-class="active" class="nav-link" to="/editor">Панель Управления</nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent = "logout">Выйти</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
