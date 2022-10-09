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
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      singleLine: [
        [51.517288954651875, -0.16685485839843753],
        [51.51194758264939, -0.1474571228027344],
        [51.51878442657495, -0.13320922851562503],
        [51.530426064343594, -0.1419639587402344],
        [51.53640593191922, -0.11209487915039064]
      ],
      miltipleLine: [
        [
          [51.49282033577651, -0.11432647705078126],
          [51.48010001366223, -0.10265350341796876],
          [51.48084836613703, -0.08222579956054689],
          [51.49591970845512, -0.08239746093750001]
        ],
        [
          [51.47614423230301, -0.08909225463867188],
          [51.47571655971428, -0.05973815917968751],
          [51.4829864484029, -0.03398895263671876],
          [51.49025517833079, -0.008239746093750002],
          [51.477641054786694, 0.008583068847656252],
          [51.487796767005534, 0.021800994873046875]
        ]
      ]
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
    addPolyline() {
      let singleLineStyle = {
        stroke: true,
        color: '#de0000',
        weight: 3,
        opacity: 1
      }

      this.$utils.map.createPolyline(
        this.map,
        this.singleLine,
        singleLineStyle
      )

      let multipleLineStyle = {
        stroke: true,
        color: '#0085fb',
        weight: 4,
        opacity: 1
      }
      this.$utils.map.createPolyline(
        this.map,
        this.miltipleLine,
        multipleLineStyle
      )
    },
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
