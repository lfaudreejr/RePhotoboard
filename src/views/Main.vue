<template>
  <div app>
    <Header></Header>
    <!-- Insert MasonryList -->
    <div class="main-container">

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * The state of this component should be to pull in all cards from api
 */

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      url: '/profile'
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 70px;
}
</style>
