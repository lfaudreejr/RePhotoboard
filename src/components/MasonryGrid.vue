<template>
  <v-container fluid class="grid-container">
    <v-layout row wrap class="grid" ref="grid">
        <v-flex xs12 sm2 md2 class="grid-sizer"></v-flex>
        <v-flex xs12 sm2 md2 class="grid-item" v-for="(i, ix) in pins" :key="ix">
          <!-- <img :src="i"/> -->
          <masonry-grid-pin :pin="i"></masonry-grid-pin>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import MasonryGridPin from '@/components/MasonryGridPin'

export default {
  components: {
    MasonryGridPin
  },
  data () {
    return {
      pins: [
        {
          title: 'A title',
          picture: `https://unsplash.it/200/300/?random=${Math.random()}`
        },
        {
          title: 'A title',
          picture: `https://unsplash.it/200/300/?random=${Math.random()}`
        },
        {
          title: 'A title',
          picture: `https://unsplash.it/200/300/?random=${Math.random()}`
        },
        {
          title: 'A title',
          picture: `https://unsplash.it/200/300/?random=${Math.random()}`
        }
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
  /* display: flex; */
  /* flex-flow: wrap; */
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
  /* width: 16.6666%; */
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
