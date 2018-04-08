<template lang='pug'>
  div.masonrypin-wrapper(@mouseover="mouseOver(true)" @mouseout="mouseOver(false)")
    div.masonrypin-inner
      re-pin-save-button.pin-save-btn-msry(
        v-show="active && isAuthenticated"
        absolute
        :pin="pin"
        @click.native='openSaveModal'
      )
      v-btn.pin-edit-btn.grey--text.text--darken-2(
        color="grey lighten-2"
        v-show="active && isUserPin"
        absolute
        right
        icon
        @click.native='openEditModal'
      )
        v-icon edit
      div.masonrypin-img(@click="visitPin()")
        div.img-wrapper
          img(:src="pin.url" :alt="pin.description")
        div.masonrypin-footer
          div.masonrypin-footer-title
            h5.grey--text.text--darken-1 {{pin.title}}

    PinSaveModal(v-model="showSaveModal" :pin="pin")
    PinEditModal(v-model="showEditModal" :pin="pin")
</template>

<script>
import PinSaveModal from '@/components/PinSaveModal'
import PinEditModal from '@/components/PinEditModal'
import { mapGetters } from 'vuex'

export default {
  components: {
    PinSaveModal,
    PinEditModal
  },
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
  data () {
    return {
      active: false,
      showSaveModal: false,
      showEditModal: false
    }
  },
  computed: {
    isUserPin () {
      return this.pin.saved_by === this.user._id
    },
    ...mapGetters({
      user: 'user/user',
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
    openSaveModal: function () {
      this.showSaveModal = !this.showSaveModal
    },
    openEditModal: function () {
      this.showEditModal = !this.showEditModal
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
