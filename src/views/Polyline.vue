<template>
  <div class="map-container">
    <div id="map-container"></div>
    <MapDraw @point="{}" @polyline="drawPolyline" @polygon="{}" @end="drawOff"></MapDraw>
  </div>
</template>

<script>
import MapDraw from '@/components/MapDraw.vue'

export default {
  name: 'MapPolyline',
  components: { MapDraw },
  data() {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      overLayer: {
        polylines: []   // 存放最终完成绘制后产生的线对象
      },
      tempGp: {
        lineNode: [],   // 绘制过程中用于生成线图形的坐标串
        lineNodeLen: 0, // 已添加节点数量
        tempLine: null, // 绘制完成前地图上的线对象
        tempNode: []    // 每次单击产生的节点对象
      }
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap('map-container')
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {})
    this.map.setView([51.505, -0.09], 13)
  },
  methods: {
    drawOn() {
      // 移除监听地图事件
      this.map.off('click')
      this.map.off('mousemove')
      this.map.off('dblclick')
      this.map.doubleClickZoom.disable()
    },
    drawOff() {
      // 移除监听地图点击事件
      this.map.off('click')
      this.map.off('mousemove')
      this.map.off('dblclick')
      this.map.doubleClickZoom.enable()

      // 复原鼠标平移样式
      this.$utils.map.removerCursorStyle(this.map)
    },
    drawPolyline() {
      this.$utils.map.addCursorStyle(this.map, 'crosshare-cursor')
      // 绘制过程中的线样式
      let tempPolygonOpts = {
        color: 'rgba(255, 0, 0, 0.85)',
        weight: 3,
        opacity: 0.85
      }
      // 完成绘制的线样式，可以和上面的绘制过程中的线样式相同，但这里为了区分，取了颜色
      let finalPolygonOpts = {
        color: 'rgba(0, 255, 0, 0.85)',
        weight: 3,
        opacity: 0.85
      }

      this.drawOn()

      // 每一次点击都视为用户为想要绘制的线添加了一个节点
      this.map.on('click', evt => {
        this.tempGp.lineNode.push([evt.latlng.lat, evt.latlng.lng])
        this.tempGp.tempNode.push(this.addNode(evt.latlng, this.map))
        this.tempGp.lineNodeLen = this.tempGp.lineNode.length
      })

      this.map.on('mousemove', evt => {
        // 第一次点击时地图上只现实第一个节点
        // 从第二次开始到绘制结束之前，不管用户添加了多少个点，鼠标移动时需要去跟新当
        // this.tempGp.lineNode 中的第 n+1 个 这样来实现橡皮筋效果
        if (this.tempGp.lineNodeLen >= 1) {
          // 移除上一个图形
          if (this.tempGp.tempLine) this.tempGp.tempLine.remove()
          // 第n+1个点的索引为 this.tempGp.lineNodeLen + 1
          // 只要在下一次点击事件发生前，this.tempGp.lineNodeLen + 1 都一样
          this.tempGp.lineNode[this.tempGp.lineNodeLen] = [
            evt.latlng.lat,
            evt.latlng.lng
          ]
          // 绘制新的临时图形
          this.tempGp.tempLine = this.$utils.map.createPolyline(
            this.map,
            this.tempGp.lineNode,
            tempPolygonOpts
          )
        }
      })
      // 双击地图结束绘制
      this.map.on('dblclick', () => {
        this.overLayer.polylines.push(
          this.$utils.map.createPolyline(
            this.map,
            this.tempGp.lineNode,
            finalPolygonOpts
          )
        )
        this.tempGp.lineNode = []
        this.tempGp.lineNodeLen = 0
        this.tempGp.tempLine.remove()
        this.tempGp.tempNode.map(el => el.remove())
      })
    },
    addNode(latlng, map) {
      let node = this.$utils.map.createIcon({
        iconUrl: require('@/assets/images/tree.png'),
        iconSize: [16, 16]
      })
      node = this.$utils.map.createMakerByLatlng(latlng, {
        icon: node
      })
      node.addTo(map)
      return node
    }
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
