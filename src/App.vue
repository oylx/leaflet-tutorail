<template>
  <div id="app">
    <component :is="CurComp" />
  </div>
</template>

<script>
import MapView from '@/views/Map'
import MapPoint from '@/views/Point'
import MapPolyline from '@/views/Polyline'
import MapPolygon from '@/views/Polygon'
import MeasureStatic from '@/views/MeasureStatic'
import MeasureDistance from '@/views/MeasureDistance'

export default {
  name: 'App',
  components: {
    MeasureDistance,
    MeasureStatic,
    MapPolygon,
    MapPolyline,
    MapPoint,
    MapView,
  },
  data() {
    return {
      active: 5,
      CurComp: null
    }
  },
  methods: {
    getDynamicCom() {
      switch (this.active) {
        case 0:
          return MapView;
        case 1:
          return MapPoint;
        case 2:
          return MapPolyline;
        case 3:
          return MapPolygon;
        case 4:
          return MeasureStatic;
        case 5:
          return MeasureDistance;
      }
    }
  },
  mounted() {
    this.CurComp = this.getDynamicCom()
  },
  computed: {}
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
