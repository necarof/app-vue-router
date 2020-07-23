<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link 
            tag="li"
            class="nav-item"
            to="/"
            active-class="active"
            exact
          >
            <a class="nav-link">Home</a>
          </router-link>
          <router-link 
            tag="li"
            class="nav-item"
            to="/cars"
            active-class="active"
          >
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>  
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
