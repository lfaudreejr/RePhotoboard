<template lang='pug'>
  div.create-container-wrapper(@click.stop='showDialog = true')
    CreateCard
      span.grey--text(slot='title') Create Board

    BoardCreateModal(v-model='showDialog')

</template>

<script>
import CreateCard from '@/components/CreateCard'
import BoardCreateModal from '@/components/BoardCreateModal'

export default {
  components: {
    CreateCard,
    BoardCreateModal
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
