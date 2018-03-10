<template lang='pug'>
  v-card
    v-card-text Board Title
    v-layout
      v-flex(xs12)
        pin-list
</template>

<script>
import PinList from '@/components/PinList'

export default {
  components: {
    PinList
  }
}
</script>

<style>

</style>
