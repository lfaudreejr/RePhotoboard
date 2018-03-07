<template>
  <div>
    <div>
      <div class="masonrypin-wrapper" @mouseover="mouseOver(true)" @mouseout="mouseOver(false)">
        <div class="masonrypin-inner">
          <div class="masonrypin-img">
            <v-fab-transition>
              <v-btn
                class="pin-save-btn"
                absolute
                color="error"
                flat
                icon
                right
                v-show="active"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-fab-transition>
            <img :src="pin.picture" alt="A picture">
          </div>
          <v-container class="masonrypin-footer">
            <div class="masonrypin-footer-title">
              <h5>{{pin.title}}</h5>
            </div>
          </v-container>
        </div>
      </div>
    </div>
  </div>
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
  color: #746d6a;
  text-shadow: 0 1px #fff;
  cursor: zoom-in;
  border-radius: 8px;
  padding: 8px;
}
.masonrypin-wrapper:hover {
  background: #EEEEEE;
}
.masonrypin-inner {
  margin: 0 auto;
}
.masonrypin-img {
  border-radius: 8px;
}
</style>
