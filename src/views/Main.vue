<template>
  <div>
    <Header></Header>
    <!-- Insert Cards -->
    <Card v-for="i in 5" :key="i" :url="url"></Card>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'

/**
 * The state of this component should be to pull in all cards from api
 */

export default {
  components: {
    Header,
    Footer,
    Card
  },
  data () {
    return {
      url: '/profile'
    }
  }
}
</script>

<style>

</style>
