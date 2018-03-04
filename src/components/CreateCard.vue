<template>
  <div class="card-wrapper">
    <div class="item">
      <div class="card-inner">
        <div class="card-inner-button">
          <svg class="blue-button" role="img" viewBox="0 0 24 24">
            <title></title>
            <path d="M17.75,13.25 L13.25,13.25 L13.25,17.75 C13.25,18.44 12.69,19.00 12.00,19.00 C11.31,19.00 10.75,18.44 10.75,17.75 L10.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L10.75,10.75 L10.75,6.25 C10.75,5.56 11.31,5.00 12.00,5.00 C12.69,5.00 13.25,5.56 13.25,6.25 L13.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00"></path>
          </svg>
        </div>
      </div>
      <div class="card-title">
        <span class="grey--text">Create Board</span>
      </div>
      <div class="card-hover"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-wrapper {
  width: 305px;
  height: 205px;
  padding-left: 12px;
  padding-right: 12px;
}
.item {
  left: 0;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  -webkit-transform: translateZ(0);
  transform: translateZ(0px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.item:hover {
  background-color: #e1f5fe;
}
.card-inner {
  width: 300px;
  height: 199px;
  border-radius: 8px;
  background-color: #b3e5fc;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
}
.card-inner-button {
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 50%;
  box-sizing: border-box;
}
.blue-button {
  height: 40px;
  width: 40px;
  color: #0091ea;
  display: block;
  fill: currentColor;
  stroke-width: 0;
  /* vertical-align: middle; */
}
.card-title {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
  font-weight: 700;
}
.card-hover {
  border-radius: 8px;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  background: #e1f5fe;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  width: 100%;
}
.card-hover:hover {
  animation: a .2s cubic-bezier(.31, 1, .34, 1) forwards;
}
</style>
