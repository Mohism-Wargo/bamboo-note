<template>
   <div id="app">
     <router-view/>
   </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body{
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f5f5f5;
}
#app{
  max-width: 400px;
  margin: 0 auto;
}

</style>
