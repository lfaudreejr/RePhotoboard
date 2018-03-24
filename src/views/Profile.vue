<template lang='pug'>
  div.app-container

    section.profile-header
      v-layout(row)
        v-flex(xs5 offset-xs1 sm4 offset-sm2)
          span.display-2 {{user.name}}
        v-flex(xs5 offset-xs1 sm4 offset-sm2)
          img(:src="user.profile")
      v-layout(row)
        v-flex(xs12 sm10 offset-sm2)
          div
            v-btn(flat :to="{ name: 'boards' }" color="primary") Boards
            v-btn(flat :to="{ name: 'pins' }" color="primary") Pins

    <!-- <v-container> -->
      v-container
        transition(name="router-anim")
          router-view(:pins="pins", :boards="boards")

</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
</style>
