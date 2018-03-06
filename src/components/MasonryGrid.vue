<template>
  <div class="grid-container">
    <div class="grid" ref="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item" v-for="(i, ix) in images" :key="ix">
        <img :src="i"/>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

export default {
  data () {
    return {
      images: [
        `https://unsplash.it/200/300/?random=${Math.random()}`,
        `https://unsplash.it/200/100/?random=${Math.random()}`,
        `https://unsplash.it/200/400/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`,
        `https://unsplash.it/200/250/?random=${Math.random()}`
      ]
    }
  },
  mounted: function () {
    this.startMasonry()
  },
  methods: {
    startMasonry () {
      const grid = document.querySelector('.grid')
      this.$masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
      imagesLoaded(grid).on('progress', () => this.$masonry.layout())
    }
  }
}
</script>

<style>
.grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  width: 16.6666%;
  padding: 3px;
}

.grid-item {
  float: left;
}

.grid-item img {
  display: block;
  max-width: 100%;
  border-radius: 8px;
}

</style>
