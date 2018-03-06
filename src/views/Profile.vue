<template>
  <div class="profile-container">
    <Header></Header>

    <section class="profile-header">
      <v-layout row>
        <v-flex xs5 offset-xs1 sm4 offset-sm2><span class="display-2">Larry Faudree</span></v-flex>
        <v-flex xs5 offset-xs1 sm4 offset-sm2><img src="@/assets/logo.png"></v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm10 offset-sm2>
          <div>
            <v-btn flat :to="{ name: 'boards' }" color="primary">Boards</v-btn>
            <v-btn flat :to="{ name: 'pins' }" color="primary">Pins</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <!-- <v-container> -->
      <section>
        <v-slide-x-transition>
          <router-view></router-view>
        </v-slide-x-transition>
      </section>
    <!-- </v-container> -->

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BoardList from '@/components/BoardList'

export default {
  components: {
    Header,
    Footer,
    BoardList
  }
}
</script>

<style scoped>
.profile-container {
  margin-top: 70px;
}
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
