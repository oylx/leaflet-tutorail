<template>
  <div class="map-container">
    <div id="map-container"></div>
    <MapDraw @point="drawPoint" @polyline="drawPolyline" @polygon="drawPolygon" @end="drawOff"></MapDraw>
  </div>
</template>

<script>
import MapDraw from '@/components/MapDraw.vue'

export default {
  name: 'MapPoint',
  components: { MapDraw },
  data() {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap('map-container')
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {})
    this.map.setView([51.505, -0.09], 13)
  },
  methods: {
    drawOn(fn) {
      // 监听地图点击事件
      this.map.off('click')
      this.map.on('click', evt => fn(evt))
    },
    drawOff() {
      // 移除监听地图点击事件
      this.map.off('click')
    },
    drawPoint() {
      this.drawOn(evt => {
        const { lat, lng } = evt.latlng
        console.log(lat, lng)
        this.$utils.map.createMakerByXY(this.map, [lng, lat])
        // this.$utils.map.createMakerByLatlng(evt.latlng).addTo(this.map)
        // 注意参数类型及经纬度顺序，等同于 this.$utils.map.createMakerByLatlng(evt.latlng).addTo(this.map)
      })
    },
    drawPolyline() {},
    drawPolygon() {}
  }
}
</script>
<style lang="less">
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  #map-container {
    width: 100%;
    height: 100%;
  }
}
</style>
