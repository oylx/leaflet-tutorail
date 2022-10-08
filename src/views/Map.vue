<template>
  <div class="map-container">
    <div id="map-container"></div>
    <NavigationCtrl @zoomIn="zoomIn" @zoomOut="zoomOut" @resetMap="resetMap"></NavigationCtrl>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationCtrl from "@/components/NavigationCtrl.vue";

export default {
  name: "mapView",
  components: { NavigationCtrl },
  data() {
    return {
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  },
  mounted() {
    this.map = this.$utils.map.createMap("map-container", {
      zoomControl: false
    });
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {});
    this.map.setView([51.505, -0.09], 13);
  },
  methods: {
    zoomIn() {
      this.map.zoomIn();
    },
    zoomOut() {
      this.map.zoomOut();
    },
    resetMap() {
      this.map.setView([51.505, -0.09], 13);
    }
  }
};
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
