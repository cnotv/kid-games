<template>
    <router-view id="app"></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
<style>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background: #dadada;
  display: flex;
}

header span {
  display: block;
  position: relative;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

header img {
  height: 56px;
  margin-right: 20px;
}
</style>
