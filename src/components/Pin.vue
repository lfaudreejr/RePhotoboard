<template lang='pug'>
  v-container.app-container(fluid)
    v-layout(row)
      v-flex(x12 sm6 offset-sm3)
        .pin-wrapper
          v-layout(row wrap)
            v-flex(xs12 sm6 md8)
              v-container.pin-img-container
                img(:src='pin.picture' width='100%')
            v-flex(xs12 sm6 md4)
              v-container.pin-side-container
                v-btn.pin-save-btn(block small color="error") Save
                  v-icon favorite
                h3 {{pin.title}}
                p saved by: {{pin.saved_by.name}}
                p {{pin.description}}
</template>

<script>
export default {
  methods: {
    getPin () {
      this.$http.get('/api/pin/' + this.$route.params.pin)
        .then(data => {
          this.pin = data.data.pin
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.getPin()
  },
  data () {
    return {
      pin: {}
    }
  }
}
</script>

<style scoped>
.pin-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}

.pin-img-container {
  max-width: 100%;
}

.pin-img-container img {
  border-radius: 8px;
}

.pin-side-container {
  padding: 15px;
}
.pin-side-container h3 {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
