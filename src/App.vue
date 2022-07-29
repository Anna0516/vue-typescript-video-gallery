<script lang="ts">
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>
<template>
  <nav>
    <NavBar />
  </nav>

  <main>
    <RouterView />
  </main>
</template>
