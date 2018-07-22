<template lang='pug'>
  v-app
    ReHeader.mb-5(:authenticated='isAuthenticated')
    transition(name='router-anim' mode='out-in')
      router-view.mt-5.mb-5
    ReFooter

    v-snackbar(bottom v-model="snackbar.show" :color="snackbar.color") {{snackbar.message}}
      v-btn(@click.native="snackbar.show = false" dark flat) Close
</template>

<script>
import { mapGetters } from 'vuex'
import ReHeader from '@/components/ReHeader'
import ReFooter from '@/components/ReFooter'

export default {
  name: 'App',
  components: {
    ReHeader,
    ReFooter
  },
  data () {
    return {
      snackbar: {
        message: '',
        color: '',
        show: false
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      authStatus: 'auth/authStatus'
    })
  },
  created () {
    this.$bus.$on('snackbar', ($event) => {
      console.log($event)
      this.snackbar.message = $event.message
      this.snackbar.show = $event.show
      this.snackbar.color = $event.color
    })
  }
}
</script>

<style>
.router-anim-enter-active {
  animation: coming 0.3s;
  animation-delay: 0.3s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
