<template lang='pug'>
  div
    div.masonrypin-wrapper(@mouseover="mouseOver(true)" @mouseout="mouseOver(false)")
      div.masonrypin-inner
        v-fab-transition
          v-btn.pin-save-btn(absolute small color="error" v-show="active") Save
            v-icon favorite
        div.masonrypin-img(@click="visitPin()")
          div.img-wrapper
              img(:src="pin.picture" :alt="pin.description")
          v-container.masonrypin-footer
            div.masonrypin-footer-title
              h5 {{pin.title}}
</template>

<script>
export default {
  props: {
    pin: {
      type: Object,
      title: {
        type: String
      },
      picture: {
        type: String
      },
      description: {
        type: String
      },
      board: {
        type: String
      }
    }
  },
  methods: {
    mouseOver: function (method) {
      this.active = method
    },
    visitPin: function (id) {
      this.$router.push({name: 'pin', params: { pin: this.pin._id }})
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style>
.masonrypin-wrapper {
  border-radius: 8px;
  color: #746d6a;
  cursor: zoom-in;
  padding: 8px;
  text-shadow: 0 1px #fff;
}
.masonrypin-wrapper:hover {
  background: #EEEEEE;
}
.masonrypin-inner {
  margin: 0 auto;
}
.masonrypin-wrapper:hover .img-wrapper {
  filter: brightness(.5);
  /* -webkit-filter: brightness(.5); */
}
.masonrypin-img {
  border-radius: 8px;
  /* transition: all .2s ease-in-out; */
  /* -webkit-transition: all .2s ease-in-out; */
  /* -moz-transition: all .2s ease-in-out; */
  /* -o-transition: all .2s ease-in-out; */
  /* transform: translateX(0); */
  /* -webkit-transform: translateX(0); */
}
.pin-save-btn {
  z-index: 100;
  margin-top: 5px;
}
</style>
