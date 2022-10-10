<template>
  <div class="page-container">
    <div class="layer-container">
      <div class="layer-container__item">
        <input
          type="checkbox"
          name="openstreetmap"
          v-model="isShowOpenstreetMap"
          @change="changeOpenStreetMapByStyle"
        />
        <label for="openstreetmap">OpenStreet Map Layer</label><br/>
      </div>
      <div class="layer-container__item">
        <input
          type="checkbox"
          name="acgislayer"
          v-model="isShowArcGisLayer"
          @change="changeArcGisLayer"
        />
        <label for="acgislayer">ArcGIS Layer</label>
      </div>
    </div>
    <div id="map-container"></div>
  </div>
</template>

<script>
export default {
  name: 'LayerControl',
  components: {},
  data() {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      tileLayer:
        'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
      isShowOpenstreetMap: true,
      openstreetMap: null,
      isShowArcGisLayer: false,
      arcGisLayer: null
    }
  },
  async mounted() {
    this.map = this.$utils.map.createMap('map-container')
    this.openstreetMap = await this.$utils.map.createTileLayer(
      this.map,
      this.OSMUrl,
      {}
    )
    this.map.setView([38.369572, -97.681121, -0.09], 13)
  },
  methods: {
    // 通过style属性显示隐藏
    changeOpenStreetMapByStyle(event) {
      const layerContaier = this.openstreetMap.getContainer()
      layerContaier.style.display = event.target.checked ? 'block' : 'none'
    },
    // 通过class属性显示隐藏
    changeOpenStreetMapByClassName(event) {
      const layerContaier = this.openstreetMap.getContainer()
      event.target.checked
        ? (layerContaier.className = layerContaier.className.replace(
          'hideLayer',
          ''
        ))
        : (layerContaier.className = layerContaier.className + ' hideLayer')
    },
    // 通过加载图层和移除图层实现显示与隐藏
    changeArcGisLayer(event) {
      event.target.checked ? this.addArcGisLayer() : this.removeArcgisLayer()
    },
    async addArcGisLayer() {
      this.arcGisLayer = await this.$utils.map.addEsirTiledMapLayer(this.map, {
        url: this.tileLayer,
        maxZoom: 15
      })
      this.arcGisLayer.bringToFront()
    },
    async removeArcgisLayer() {
      this.arcGisLayer.remove()
    }
  }
}
</script>

<style lang="less">
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;

  .layer-container {
    width: 320px;
    height: 100%;
    background-color: #efefef;

    &__item {
      margin: 10px 0;
      text-align: left;
      padding: 10px;
      background-color: #fefefe;
    }
  }

  #map-container {
    flex: 1;
    height: 100%;
  }

  .hideLayer {
    display: none;
  }
}
</style>
