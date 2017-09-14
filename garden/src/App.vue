<template>
  <div id="app">
    <button @click="redirect">登陆</button>
    <router-link :to="{path:'auto'}">auto</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      age: 2,
      person: {}
    }
  },
  methods: {
    redirect () {
      this.$router.push({path: `/auth/${this.age}`, query: {age: 2}})
    }
  },
  computed: {
    format () {
      return this.age * 10
    }
  },
  watch: {
    age: function (oldValue, newValue) {

    },
    person: {
      handler: function (value) {

      }
    }
  },
  components: {

  },
  created () {
    console.log(this.format)
  },
  mounted () {

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
