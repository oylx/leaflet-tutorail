import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'

const createMap = (divId, options) => {
  let map = $L.map(divId, options)
  return map
}

const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = $L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
$L.Marker.prototype.options.icon = DefaultIcon;

const createIcon = options => {
  return $L.icon(options);
};

/**
 * 通过 [x, y] 坐标添加 Maker
 *
 * @param {Object} map
 * @param {Object} latLng
 * @param {Object} options
 *
 */
const createMakerByXY = (map, coordinate, options = {}) => {
  let marker = $L.marker($L.latLng(coordinate[1], coordinate[0]), options);
  marker.addTo(map);
  return marker;
};

/**
 * 创建线要素
 *
 * @param {Object} map
 * @param {Array} linePath
 * @param {Object} lineOpts
 */
const createPolyline = (map, linePath, lineOpts) => {
  let polyline = $L.polyline(linePath, lineOpts);
  polyline.addTo(map);
  return polyline;
};

export default { createMap, createTileLayer, createIcon, createMakerByXY, createPolyline }
