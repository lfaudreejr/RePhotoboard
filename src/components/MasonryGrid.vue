<template lang='pug'>
  v-container.grid-container(fluid)
    v-layout.grid.row.wrap(ref="grid")
      v-flex.grid-sizer.xs12.sm2.md2
      v-flex.grid-item.xs12.sm2.md2(v-for="(i, ix) in pins" :key="ix")
        masonry-grid-pin(:pin="i")
</template>

<script>
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import MasonryGridPin from '@/components/MasonryGridPin'

export default {
  components: {
    MasonryGridPin
  },
  props: {
    pins: {
      type: Array
    }
  },
  data () {
    return {
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
