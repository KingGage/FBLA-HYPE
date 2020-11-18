<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Herriman Business</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/build" class="nav-link">Build</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/develop" class="nav-link">Develop</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/deploy" class="nav-link">Deploy</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/team" class="nav-link">Team</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
  @import './assets/styles/bootstrap.min.css';
</style>