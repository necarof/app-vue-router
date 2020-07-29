<template>
  <div>
    <h3>Car name: {{ $route.query.name }}</h3>
    <h4>Car year: {{ $route.query.year }}</h4>

    <div class="scroll"></div>
    <h5 id="scroll">bottom</h5>
  </div>
</template>

<script>

export default {
  name: 'Car',
}
</script>

<style scoped>
  .scroll {
    width: 100px;
    height: 1000px;
    background-color: #ccc;
  }
</style>
