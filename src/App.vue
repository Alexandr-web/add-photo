<template>
  <div id="app">
    <vModalWindow />
  </div>
</template>

<script>
import vModalWindow from './components/v-modal-window';

export default {
  name: 'App',
  components: {
    vModalWindow
  }
}
</script>

<style>
  @import '../public/css/main.css';
</style>
