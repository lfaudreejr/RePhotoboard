<template lang="pug">
  v-btn.pin-save-btn(
    :absolute="absolute"
    :block="block"
    depressed
    :icon="icon"
    :small="small"
    color="secondary"
    @click.native='openModal'
  ) {{name}}
    v-icon(center) save
</template>

<script>
// import PinSaveModal from '@/components/PinSaveModal'

export default {
  props: {
    pin: {
      type: Object,
      default: {}
    },
    absolute: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  // components: {
  //   PinSaveModal
  // },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>

</style>
