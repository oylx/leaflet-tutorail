<template>
  <div class="map-container">
    <div id="map-container"></div>
    <NavigationCtrl @zoomIn="zoomIn" @zoomOut="zoomOut" @resetMap="resetMap"></NavigationCtrl>
    <MapTools @marker="addMarker" @polyline="addPolyline" @polygon="addPolygon"></MapTools>
  </div>
</template>

<script>
import NavigationCtrl from '@/components/NavigationCtrl.vue'
import MapTools from '@/components/MapTools.vue'

export default {
  name: 'mapView',
  components: { NavigationCtrl, MapTools },
  data() {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap('map-container', {
      zoomControl: false
    })
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {})
    this.map.setView([51.505, -0.09], 13)
  },
  methods: {
    zoomIn() {
      this.map.zoomIn()
    },
    zoomOut() {
      this.map.zoomOut()
    },
    resetMap() {
      this.map.flyTo([51.505, -0.09], 13)
    },
    addMarker() {
      this.$utils.map.createMakerByXY(this.map, [-0.09, 51.505])

      let gifIcon = this.$utils.map.createIcon({
        iconUrl: require('@/assets/images/home.png'),
        iconSize: [32, 32]
      })
      this.$utils.map.createMakerByXY(this.map, [-0.095, 51.505], {
        icon: gifIcon
      })

      let pnOrJpgIcon = this.$utils.map.createIcon({
        iconUrl: require('@/assets/images/tree.png'),
        iconSize: [52, 42]
      })
      this.$utils.map.createMakerByXY(this.map, [-0.09, 51.490], {
        icon: pnOrJpgIcon
      })
    },
    addPolyline() {},
    addPolygon() {},
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
}

#map-container {
  width: 100%;
  height: 100%;
}
</style>
