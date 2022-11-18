<template>
  <div id="app">
    <ul class="tabs">
      <li v-for="item in tabs" :class="{ active: item.key === active }" :key="item.key" @click="active = item.key">{{ item.name }}</li>
    </ul>
    <component :is="CurComp" />
  </div>
</template>

<script>
import MapView from '@/views/Map'
import MapBoxGl from '@/views/MapBoxGl'
import MapPoint from '@/views/Point'
import MapPolyline from '@/views/Polyline'
import MapPolygon from '@/views/Polygon'
import MeasureStatic from '@/views/MeasureStatic'
import MeasureDistance from '@/views/MeasureDistance'
import ArcgisServices from '@/views/ArcgisServices'
import LayerControl from '@/views/LayerControl'
import MapGroup from '@/views/MapGroup'


export default {
  name: 'App',
  components: {
    MapGroup,
    LayerControl,
    ArcgisServices,
    MeasureDistance,
    MeasureStatic,
    MapPolygon,
    MapPolyline,
    MapPoint,
    MapView,
    MapBoxGl,
  },
  data() {
    const tabs = [
      { name: 'MapView', component: MapView, key: 0 },
      { name: 'MapPoint', component: MapPoint, key: 1 },
      { name: 'MapPolyline', component: MapPolyline, key: 2 },
      { name: 'MapPolygon', component: MapPolygon, key: 3 },
      { name: 'MeasureStatic', component: MeasureStatic, key: 4 },
      { name: 'MeasureDistance', component: MeasureDistance, key: 5 },
      { name: 'ArcgisServices', component: ArcgisServices, key: 6 },
      { name: 'LayerControl', component: LayerControl, key: 7 },
      { name: 'MapGroup', component: MapGroup, key: 8 },
      { name: 'MapBoxGl', component: MapBoxGl, key: 9 },
    ]
    return {
      active: 9,
      tabs,
      CurComp: null
    }
  },
  methods: {
    getDynamicCom() {
      this.CurComp =  this.tabs.find(v => v.key === this.active).component || MapView
    }
  },
  mounted() {
    this.getDynamicCom()
  },
  watch: {
    active() {
      this.getDynamicCom()
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

  .tabs {
    position: absolute;
    top: 100px;
    left: 5px;
    z-index: 999;
    list-style: none;
    padding-left: 0;
    background: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    li {
      padding: 10px;
      text-align: left;
      &.active {
        color: lightskyblue;
      }
    }
  }
}
</style>
