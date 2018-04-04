<template lang="pug">
  v-btn.pin-save-btn(
    :absolute="absolute"
    :block="block"
    depressed
    :small="small"
    color="secondary"
    @click.native='openModal'
  ) Save
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
      default: true
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
