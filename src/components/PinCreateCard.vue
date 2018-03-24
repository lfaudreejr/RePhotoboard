<template lang='pug'>
  div
    div.wrapper(@click.stop='showDialog = true')
      CreateCard
        span.grey--text(slot='title') Create Pin

    PinCreateModal(v-model='showDialog')

</template>

<script>
import CreateCard from '@/components/CreateCard'
import PinCreateModal from '@/components/PinCreateModal'

export default {
  components: {
    CreateCard,
    PinCreateModal
  },
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style>

</style>
