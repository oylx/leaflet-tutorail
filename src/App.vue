<template>
  <div id="app">
    <map-point v-if="active === 1" />
    <map-view v-if="active === 0" />
  </div>
</template>

<script>
import MapView from '@/views/Map'
import MapPoint from '@/views/Point'

export default {
  name: 'App',
  components: {
    MapPoint,
    MapView,
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="less">
@import "~@/assets/style/index.less";
@import "~@/assets/style/leftlet.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
