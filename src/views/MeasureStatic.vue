<template>
  <div class="map-container">
    <div id="map-container"></div>
  </div>
</template>

<script>
export default {
  name: 'MeasureStatic',
  data() {
    return {
      map: null,
      OSMUrl: 'http://tile.osm.org/{z}/{x}/{y}.png',
      overLayer: {
        polylines: [],
        polygons: [],
        measurements: []
      },
      existLine: [
        [51.49404942257001, -0.14136314392089847],
        [51.48640717153227, -0.12797355651855472],
        [51.48640717153227, -0.12797355651855472],
        [51.48464339321334, -0.10376930236816408],
        [51.48464339321334, -0.10376930236816408],
        [51.486353724706795, -0.09801864624023438],
        [51.486353724706795, -0.09801864624023438],
        [51.486353724706795, -0.09801864624023438]
      ],
      existLinePolygon: [
        [51.497175428776025, -0.11269569396972658],
        [51.48825104864774, -0.1149272918701172],
        [51.48825104864774, -0.1149272918701172],
        [51.48723558931616, -0.09758949279785158],
        [51.48723558931616, -0.09758949279785158],
        [51.49450364191158, -0.09282588958740236],
        [51.49450364191158, -0.09282588958740236],
        [51.499980636437265, -0.10437011718750001],
        [51.499980636437265, -0.10437011718750001],
        [51.499980636437265, -0.10437011718750001]
      ]
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap('map-container')
    this.map.setView([51.505, -0.09], 14)
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {})
    let existLineOpts = {
      color: 'rgba(255, 58, 0, 1)',
      weight: 4,
      opacity: 1,
      // 是否显示量测信息
      showMeasurements: true,
      // 量测信息的属性：
      measurementOptions: {
        minDistance: 30 // 显示 最小的线长度为30m(默认)，小于此长度则不显示
      }
    }

    this.$utils.map.createPolyline(this.map, this.existLine, existLineOpts)

    let existPolygonOpts = {
      color: 'rgba(0, 58, 255, 0.85)',
      weight: 2,
      opacity: 0.85,
      // 是否显示量测信息
      showMeasurements: true,
      // 量测信息的属性：
      measurementOptions: {
        showOnHover: true // 开始鼠标移动到图形上时显示量测信息
      }
    }
    this.$utils.map.createPolygon(
      this.map,
      this.existLinePolygon,
      existPolygonOpts
    )
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
