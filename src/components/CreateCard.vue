<template lang='pug'>
  div.card-wrapper
    div.card-item
      div.card-inner
        div.card-inner-button
          svg.blue-button(role="img" viewBox="0 0 24 24")
            title
            path(d="M17.75,13.25 L13.25,13.25 L13.25,17.75 C13.25,18.44 12.69,19.00 12.00,19.00 C11.31,19.00 10.75,18.44 10.75,17.75 L10.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L10.75,10.75 L10.75,6.25 C10.75,5.56 11.31,5.00 12.00,5.00 C12.69,5.00 13.25,5.56 13.25,6.25 L13.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00")
      div.card-title
        slot(name='title')
      div.card-hover
</template>

<script>

export default {

}
</script>

<style scoped>
.card-wrapper {
  /* padding-left: 12px; */
  /* padding-right: 12px; */
  width: 300px;
  margin-left: 50px;
  /* margin-bottom: 70px; */
}
.card-item {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  border-radius: 8px;
  cursor: pointer;
}
.card-item:hover {
  background-color: #EEEEEE;
}
.card-title {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
  font-weight: 700;
}
.card-inner {
  width: 300px;
  height: 199px;
  border-radius: 8px;
  background-color: #BDBDBD;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  display: flex;
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
  color: #16a085;
  display: block;
  fill: currentColor;
  stroke-width: 0;
  /* vertical-align: middle; */
}

@media only screen and (min-width: 500px) {
  .card-wrapper {
    /* padding-left: 12px; */
    /* padding-right: 12px; */
    max-width: 275px;
    margin-left: 0px;
    /* margin-bottom: 70px; */
  }
  .card-inner {
    width: 275px;
  }
}

@media only screen and (max-width: 375px) {
  .card-wrapper {
    margin-left: 5px;
  }
}
</style>
