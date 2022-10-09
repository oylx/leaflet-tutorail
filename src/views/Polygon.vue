<template>
  <div class="map-container">
    <div id="map-container"></div>
    <MapDraw @point="{}" @polyline="{}" @polygon="drawPolygon" @end="drawOff"></MapDraw>
  </div>
</template>

<script>
import MapDraw from '@/components/MapDraw.vue'

export default {
  name: 'MapPolygon',
  components: { MapDraw },
  data() {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      overLayer: {
        polygons: []   // 存放最终完成绘制后产生的面对象
      },
      tempGp: {
        polygonNode: [],   // 绘制过程中用于生成面图形的坐标串
        polygonNodeLen: 0, // 已添加节点数量
        tempPolygon: null, // 绘制完成前地图上的线对象
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
    drawPoint() {
      this.drawOn()

      this.$utils.map.addCursorStyle(this.map, 'pointer-cursor')
      this.map.on('click', evt => {
        this.$utils.map.createMakerByLatlng(evt.latlng).addTo(this.map)
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
    },
    drawPolygon() {
      this.$utils.map.addCursorStyle(this.map, 'crosshare-cursor')
      // 绘制过程中的面样式
      let tempPolygonOpts = {
        color: 'rgba(255, 0, 0, 0.85)',
        fill: true,
        weight: 3,
        opacity: 0.85
      }
      // 完成绘制的面样式，可以和上面的绘制过程中的面样式相同，但这里为了区分，取了颜色
      let finalPolygonOpts = {
        color: 'rgba(0, 255, 0, 0.85)',
        fill: true,
        weight: 3,
        opacity: 0.85
      }

      this.drawOn()
      // 每一次点击都视为用户为想要绘制的面添加了一个节点
      // 所有用户采集的点将会组织成按面的数据结构组织（其实和线是一样的）-- 一组坐标串

      this.map.on('click', evt => {
        this.tempGp.polygonNode.push([evt.latlng.lat, evt.latlng.lng])
        this.tempGp.polygonNodeLen = this.tempGp.polygonNode.length
        // 更新已添加节点数量
        this.tempGp.tempNode.push(this.addNode(evt.latlng, this.map))
      })

      this.map.on('mousemove', evt => {
        // 下一次绘制前，从map中移除掉上一次产生的图形
        if (this.tempGp.tempPolygon) this.tempGp.tempPolygon.remove()
        // 当添加的节点的数量为1时，显示线状橡皮筋效果
        if (this.tempGp.polygonNodeLen === 1) {
          // 橡皮筋效果的关键就是，随鼠标移动更新图形的 n+1 个节点的位置
          // 而第 n+1 个点的索引为 节点的数量
          this.tempGp.polygonNode[this.tempGp.polygonNodeLen] = [
            evt.latlng.lat,
            evt.latlng.lng
          ]
          this.tempGp.tempPolygon = this.$utils.map.createPolyline(
            this.map,
            this.tempGp.polygonNode,
            tempPolygonOpts
          )
        } else if (this.tempGp.polygonNodeLen >= 2) {
          // 当添加的节点的数量 >= 2时，显示面状橡皮筋效果
          this.tempGp.polygonNode[this.tempGp.polygonNodeLen] = [
            evt.latlng.lat,
            evt.latlng.lng
          ]

          this.tempGp.tempPolygon = this.$utils.map.createPolygon(
            this.map,
            this.tempGp.polygonNode,
            tempPolygonOpts
          )
        }
      })

      this.map.on('dblclick', () => {
        // 绘制最终的面图形，并保存
        this.overLayer.polygons.push(
          this.$utils.map.createPolygon(
            this.map,
            this.tempGp.polygonNode,
            finalPolygonOpts
          )
        )
        // 清空所有中间数据
        this.tempGp.polygonNode = []
        this.tempGp.polygonNodeLen = 0
        this.tempGp.tempPolygon.remove()
        this.tempGp.tempNode.map(el => el.remove())
      })
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
