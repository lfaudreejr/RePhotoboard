<template lang='pug'>
  v-app
    Header
    transition(name='router-anim' mode='out-in')
      router-view
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {

    }
  },
  name: 'App'
}
</script>

<style src="./styles/main.css"></style>
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
