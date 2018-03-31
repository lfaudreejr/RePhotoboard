<template lang='pug'>
  div.create-container-wrapper(@click.stop='showDialog = true')
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

<style scoped>

</style>
