import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'

const createMap = (divId, options) => {
  let map = $L.map(divId, options)
  return map
}

const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options)
  tileLayer.addTo(map)
  return tileLayer
}

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = $L.icon({
  iconAnchor: [13, 41],
  iconUrl: icon,
  shadowUrl: iconShadow
})
$L.Marker.prototype.options.icon = DefaultIcon

const createIcon = options => {
  return $L.icon(options)
}

/**
 * 通过 [x, y] 坐标添加 Maker
 *
 * @param {Object} map
 * @param {Object} latLng
 * @param {Object} options
 *
 */
const createMakerByXY = (map, coordinate, options = {}) => {
  let marker = $L.marker($L.latLng(coordinate[1], coordinate[0]), options)
  marker.addTo(map)
  return marker
}

const createMakerByLatlng = ({ lat, lng }, options = {}) => {
  let marker = $L.marker($L.latLng(lat, lng), options)
  return marker
}

/**
 * 创建线要素
 *
 * @param {Object} map
 * @param {Array} linePath
 * @param {Object} lineOpts
 */
const createPolyline = (map, linePath, lineOpts) => {
  let polyline = $L.polyline(linePath, lineOpts)
  polyline.addTo(map)
  return polyline
}

/**
 * 创建面要素
 *
 * @param {Object} map
 * @param {Array} areaPath
 * @param {Object} areaOpts
 */
const createPolygon = (map, areaPath, areaOpts) => {
  let polygon = $L.polyline(areaPath, areaOpts)
  polygon.addTo(map)
  return polygon
}

const createPopup = (options) => $L.popup(options)

// 通过数组创建 latlng
const createLatLonByArray = (coordinate) => {
  let latLng = $L.latLng(coordinate[0], coordinate[1])
  console.log(1)
  return latLng
}

// 存储鼠标样式
let CursorStyle = ''

// 添加鼠标样式
const addCursorStyle = (map, cursorStyle) => {
  CursorStyle = cursorStyle
  $L.DomUtil.addClass(map._container, cursorStyle)
}
// 移除鼠标样式
const removerCursorStyle = map => {
  $L.DomUtil.removeClass(map._container, CursorStyle)
}

export default {
  createMap,
  createTileLayer,
  createIcon,
  createMakerByXY,
  createMakerByLatlng,
  createPolyline,
  createPolygon,
  createPopup,
  createLatLonByArray,
  addCursorStyle,
  removerCursorStyle,
}
