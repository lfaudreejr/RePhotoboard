<template lang='pug'>
    <!-- Create a 6 img grid -->
    div.board-grid(ref="boardgrid")
      div.board-grid-sizer
      div.board-grid-item.btlr8
        img.board-grid-picture.btlr8(v-if="pins[0]" :src="pins[0].picture")

      div.board-grid-item.board-grid-item--height2
        img.board-grid-picture(v-if="pins[1]" :src="pins[0].picture")

      div.board-grid-item.board-grid-item--height2.btrr8
        img.board-grid-picture.btrr8(v-if="pins[2]" :src="pins[0].picture")

      div.board-grid-item.board-grid-item--height2.bblr8
        img.board-grid-picture.bblr8(v-if="pins[3]" :src="pins[0].picture")

      div.board-grid-item
        img.board-grid-picture(v-if="pins[4]" :src="pins[0].picture")

      div.board-grid-item.bbrr8
        img.board-grid-picture.bbrr8(v-if="pins[5]" :src="pins[0].picture")

</template>

<script>
import Masonry from 'masonry-layout'
// import imagesLoaded from 'imagesloaded'

export default {
  props: {
    pins: {
      type: Array,
      default: () => []
    }
  },
  mounted: function () {
    this.startMasonry()
  },
  methods: {
    startMasonry () {
      const grid = this.$refs.boardgrid
      this.$masonry = new Masonry(grid, {
        itemSelector: '.board-grid-item',
        columnWidth: '.board-grid-sizer',
        gutter: 1,
        percentPosition: true
      })
      // imagesLoaded(grid).on('progress', () => this.$masonry.layout())
    }
  }
}
</script>

<style scoped>
.board-grid {
  max-width: 300px;
  max-height: 100%;
}

.board-grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */
.board-grid-sizer,
.board-grid-item {
  width: 33%;
  margin-bottom: 1px
}

.board-grid-item {
  height: 89px;
  float: left;
  background: #BDBDBD;
}

.board-grid-item--height2 { height: 109px; }

.board-grid-picture {
  width: 100%;
  height: 100%;
}
.ml-1 {
  margin-left: 1px;
}
.mb-1 {
  margin-bottom: 1px;
}
.btlr8 {
  border-top-left-radius: 8px;
}
.btrr8 {
  border-top-right-radius: 8px;
}
.bblr8 {
  border-bottom-left-radius: 8px;
}
.bbrr8 {
  border-bottom-right-radius: 8px;
}
</style>
