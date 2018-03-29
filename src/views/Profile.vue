<template lang='pug'>
  div.mt-5

    section.profile-header
      v-layout.pb-3.pt-3(row)
        v-flex(xs12)
          v-container
            p.display-3.grey--text.text--darken-1 {{user.username}}
      v-layout(row)
        v-flex(xs12 sm10 offset-sm2)
          div
            v-btn(flat :to="{ name: 'boards' }" color="primary") Boards
            v-btn(flat :to="{ name: 'pins' }" color="primary") Pins

    div.profile-view-container
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
.profile-header {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 25px;
}
.profile-content {
  margin: 0 auto;
}
.profile-view-container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
