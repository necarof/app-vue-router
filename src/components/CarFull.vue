<template>
  <div>
    <h3>Car name: {{ $route.query.name }}</h3>
    <h4>Car year: {{ $route.query.year }}</h4>
  </div>
</template>

<script>

export default {
  name: 'Car',
}
</script>

<style>

</style>
