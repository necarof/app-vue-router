<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'Car',
  data () {
    return {
      id: this.$router.currentRoute.params['id']
    }
  },
  methods: {
    back () {
      this.$router.push('/cars')
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params['id']
    }
  }
}
</script>

<style>

</style>
