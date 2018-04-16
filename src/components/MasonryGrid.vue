<template lang='pug'>
  v-layout.grid(ref="grid" justify-center)
    v-flex(xs12)
      div.stamp.hidden-md-and-down
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
  mounted: function () {
    this.$nextTick(function () {
      this.startMasonry()
    })
  },
  updated: function () {
    this.$nextTick(function () {
      this.startMasonry()
    })
  },
  methods: {
    startMasonry () {
      const grid = this.$refs.grid
      this.$masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        stamp: '.stamp',
        isFitWidth: true
      })
      imagesLoaded(grid).on('done', () => this.$masonry.layout())
    }
  }
}
</script>

<style>
.grid {
  margin: 0 auto;
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
  width: 275px;
}
.stamp,
.grid-item {
  float: left;
}
.grid-item img {
  display: block;
  max-width: 100%;
  border-radius: 8px;
}

@media only screen and (max-width: 900px) {
  .container {
    padding: 2px !important;
  }
  .grid-sizer,
  .grid-item {
    width: 201px;
  }
}
@media only screen and (max-width: 610px) {
  .container {
    padding: 2px !important;
  }
  .grid-sizer,
  .grid-item {
    width: 175px;
  }
}
@media only screen and (max-width: 375px) {
  .grid-sizer,
  .grid-item {
    width: 155px
  }
}

</style>
