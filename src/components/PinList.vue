<template lang='pug'>
  MasonryGrid(:pins="pins")
    PinCreateCard(slot="stamp")
</template>

<script>
import MasonryGrid from '@/components/MasonryGrid'
import PinCreateCard from '@/components/PinCreateCard'

export default {
  name: 'pin-list',
  components: {
    MasonryGrid,
    PinCreateCard
  },
  props: {
    pins: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
