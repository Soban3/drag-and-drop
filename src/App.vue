<template>
<div id="app">
  <NestedExample />
</div>
</template>

<script>
import NestedExample from './components/nested-example.vue'
export default {
    name: 'App',
    components: {
      NestedExample
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
