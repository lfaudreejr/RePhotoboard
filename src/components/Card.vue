<template>
  <div>
    <v-card flat hover :to='$props.url'>
      <v-card-title>Title</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
