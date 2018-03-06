<template>
  <div class="card-wrapper">
    <div class="card-item">
      <!-- wrap in a router -->
      <div class="card-inner">
        <!-- Should contain 6 images -->
        <div class="card-inner-wrapper">
          <board-content-grid></board-content-grid>
        </div>
      </div>
      <div class="card-title">Fake Card</div>
    </div>
  </div>
</template>

<script>
import BoardContentGrid from '@/components/BoardContentGrid'

export default {
  components: {
    BoardContentGrid
  }
}
</script>

<style>
.card-inner-wrapper {
  background: #f4f4f4;
  color: #746d6a;
  text-shadow: 0 1px #fff;
  border: 1px solid #ccc;
  /* width: 100%; */
  /* height: 100%; */
  /* overflow: hidden; */
}
</style>
