<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
      <a class="navbar-brand order-md-last">CRUD Vue.js + MySQL + Node</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Create New Location</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list-location">List All Locations</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
