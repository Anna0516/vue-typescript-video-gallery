<template>
  <h1 class="display-3">Alla videos</h1>
  <VideoCards />
</template>
<script lang="ts">
  import VideoCards from '../components/VideoCards.vue'
  export default {
    components: {
      VideoCards
    }
  }
</script>
