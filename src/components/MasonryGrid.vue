<template lang='pug'>
  div.grid(ref="grid")
    slot(name="stamp")
    div.grid-sizer
    div.grid-item(v-for="(i, ix) in pins" :key="ix")
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
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  updated: function () {
    this.startMasonry()
  },
  methods: {
    startMasonry () {
      const grid = this.$refs.grid
      this.$masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        stamp: '.stamp',
        percentPosition: true
      })
      imagesLoaded(grid).on('progress', () => this.$masonry.layout())
    }
  }
}
</script>

<style>
.grid {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  /* flex-flow: wrap; */
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */
.grid-sizer {
  position: absolute;
}

.grid-sizer,
.grid-item {
  width: 20%;
  /* width: 20%; */
  /* padding: 3px; */
}
@media (max-width: 960px) {
  .grid-sizer,
  .grid-item {
    width: 26.66%;
  }
}

@media (max-width: 750px) {
  .grid-sizer,
  .grid-item {
    width: 33.333%;
  }
}
@media (max-width: 600px) {
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}

.stamp,
.grid-item {
  float: left;
}

.grid-item img {
  /* display: block; */
  max-width: 100%;
  border-radius: 8px;
}

</style>
