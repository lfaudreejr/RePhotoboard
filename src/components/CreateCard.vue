<template lang='pug'>
  div.create-card.ml-0
    div.create-card-item
      div.create-card-inner
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
.create-card-item {
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  cursor: pointer;
}
.create-card-item:hover {
  background-color: #EEEEEE;
}
.create-card-title {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
  font-weight: 700;
}
.create-card-inner {
  border-radius: 8px;
  height: 199px;
  background-color: #BDBDBD;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  display: flex;
}

</style>
