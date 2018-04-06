<template lang='pug'>
  v-container(fluid).mt-5
    v-container.mx-auto
      v-layout.pb-5.pt-5.pr-3.pl-3(row)
        v-flex(xs12)
          v-container
            p.display-3.grey--text.text--darken-1 {{user.username}}
      v-layout(row)
        v-flex(xs12 sm10 offset-sm2)
          div
            v-btn(flat round :to="{ name: 'boards' }" color="primary") Boards
            v-btn(flat round :to="{ name: 'pins' }" color="primary") Pins

    v-container.mx-auto
      transition(name="router-anim")
        router-view(:pins="pins", :boards="boards")

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapGetters({
      boards: 'user/boards',
      pins: 'user/pins',
      user: 'user/user'
    })
  }
}
</script>

<style scoped>

</style>
