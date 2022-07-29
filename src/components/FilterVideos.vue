<template>
  <div class="overflow-scroll">
    <div class="search col row-cols-1">
      <input
        class="searchInput"
        type="text"
        v-model="search"
        placeholder="Search videos"
      />
    </div>

    <div class="wrapper row row-cols-1 row-cols-md-3 g-4">
      <div
        class="card flip-card"
        v-for="video in filteredList"
        :key="video.title"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              :src="`/src/assets/images/${video.image}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ video.title }}</h5>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="card-body">
              <h5 class="card-title">{{ video.title }}</h5>
              <iframe
                :src="`https://www.youtube.com/embed/${video.link}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p class="card-text">
                {{ video.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    created() {
      fetch('/videos.json')
        .then((response) => response.json())
        .then((videos) => {
          ;(this as any).videos = videos
        })
    },
    data() {
      return {
        videos: '',
        search: ''
      }
    },

    computed: {
      filteredList() {
        if (!(this as any).videos) return
        return (this as any).videos.filter(
          (video: { description: string; title: string }) => {
            return (
              video.description
                .toLowerCase()
                .includes((this as any).search.toLowerCase()) ||
              video.title
                .toLowerCase()
                .includes((this as any).search.toLowerCase())
            )
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .overflow-scroll {
    max-height: 75vh;
    overflow-x: hidden !important;
  }
  .card {
    margin: 2em 2em;
    width: 22em;
    min-height: 17em;
    transition: all 0.3s ease-out;
  }
  .card:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 24px 46px rgba(255, 215, 97, 0.48);
  }
  .search {
    margin: 3em;
    align-content: center;
  }
  .searchInput {
    padding: 0.5em;
    text-align: center;
  }
  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    color: black;
    transform: rotateY(180deg);
  }
</style>
