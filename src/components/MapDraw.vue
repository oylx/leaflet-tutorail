<template>
  <div class="map-tools">
    <ul>
      <li :class="[{active: activeTool === 'point'}]" @click="handleClick('point')">Point</li>
      <li :class="[{active: activeTool === 'polyline'}]" @click="handleClick('polyline')">Polyline</li>
      <li :class="[{active: activeTool === 'polygon'}]" @click="handleClick('polygon')">Polygon</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mapDraw',
  data() {
    return {
      activeTool: ''
    }
  },
  methods: {
    handleClick(type) {
      if (this.activeTool === type) {
        this.activeTool = ''
        this.$emit('end')
      } else {
        this.activeTool = type
        this.$emit(type)
      }
    },
  }
}
</script>
<style lang="less">
.map-tools {
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 999;

  height: 36px;
  box-shadow: 0px 0px 50px 2px rgba(0, 0, 0, 0.35);
  background-color: #fff;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 0 15px;
      height: 36px;
      font-size: 13px;
      line-height: 36px;
      cursor: pointer;
    }

    li.active {
      background-color: rgb(102, 156, 255);
      color: #fff;
    }

    li:hover {
      background-color: rgb(212, 224, 246);
    }
  }
}
</style>
