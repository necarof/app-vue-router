<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="back">Back</button>
    <br>
    <br>
    <router-link 
      class="btn btn-sm btn-danger"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000, hash: '#scroll'}}"
    >
      Full info
    </router-link>
    <hr>
    <router-view />
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
