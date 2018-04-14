<template lang='pug'>
  v-app
    ReHeader.mb-5(:authenticated='isAuthenticated')
    transition(name='router-anim' mode='out-in')
      router-view.mt-5.mb-5
    ReFooter
</template>

<script>
import { mapGetters } from 'vuex'
import ReHeader from '@/components/ReHeader'
import ReFooter from '@/components/ReFooter'

export default {
  components: {
    ReHeader,
    ReFooter
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      authStatus: 'auth/authStatus'
    })
  },
  name: 'App'
}
</script>

<style lang="scss">
@import 'src/assets/styles/main.scss';
</style>

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
