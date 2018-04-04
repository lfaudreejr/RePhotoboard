<template lang='pug'>
  div.masonrypin-wrapper(@mouseover="mouseOver(true)" @mouseout="mouseOver(false)")
    div.masonrypin-inner
      re-pin-save-button(v-show="active" absolute v-if='isAuthenticated' :pin="pin" @click.native='openModal')
      div.masonrypin-img(@click="visitPin()")
        div.img-wrapper
          img(:src="pin.url" :alt="pin.description")
        div.masonrypin-footer
          div.masonrypin-footer-title
            h5.grey--text.text--darken-1 {{pin.title}}

    PinSaveModal(v-model="showModal" :pin="pin")
</template>

<script>
import PinSaveModal from '@/components/PinSaveModal'
import { mapGetters } from 'vuex'

export default {
  props: {
    pin: {
      type: Object,
      title: {
        type: String,
        default: ''
      },
      picture: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      board: {
        type: String,
        default: ''
      }
    }
  },
  components: {
    PinSaveModal
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    mouseOver: function (method) {
      this.active = method
    },
    visitPin: function (id) {
      this.$router.push({name: 'pin', params: { pin: this.pin._id }})
    },
    openModal: function () {
      this.showModal = !this.showModal
    }
  },
  data () {
    return {
      active: false,
      showModal: false
    }
  }
}
</script>

<style lang="scss">
.masonrypin-wrapper {
  border-radius: 8px;
  padding: 8px;
  cursor: zoom-in;
}
.masonrypin-wrapper:hover {
  background: #EEEEEE;
}
.masonrypin-inner {
  margin: 0 auto;
}
.masonrypin-wrapper:hover {
  .img-wrapper {
    filter: brightness(.5);
    -webkit-filter: brightness(.5);
  }
}
.masonrypin-img {
  border-radius: 8px;
  transition: all .2s ease-in-out;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transform: translateX(0);
  -webkit-transform: translateX(0);
}
.masonrypin-footer {
  padding: 5px;
}
</style>
