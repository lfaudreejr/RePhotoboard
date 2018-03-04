<template>
  <v-container fluid class="container">
    <Header></Header>

    <section class="profile-header">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm1><span class="display-2">Larry Faudree</span></v-flex>
        <v-flex xs12 sm3 offset-sm4><img src="@/assets/logo.png"></v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <div>
            <v-btn flat :to="{ name: 'boards' }" color="primary">Boards</v-btn>
            <v-btn flat :to="{ name: 'pins' }" color="primary">Pins</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section class="profile-content">
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
    </section>

    <Footer></Footer>
  </v-container>
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
.container {
  margin-top: 70px;
}
.profile-header {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.profile-content {

}
</style>
