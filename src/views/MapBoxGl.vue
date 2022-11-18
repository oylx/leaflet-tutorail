<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
const mapStyle1 = {
  "version": 8,
  "name": "sn_style",
  "metadata": {"maputnik:renderer": "mbgljs"},
  "zoom": 8,
  "sources": {
    "sn_area": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_area@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "sn_drainage": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_drainage@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "sn_house": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_house@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "sn_road": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_road@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "snbj": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:snbj@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "sn_drainage_point": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_drainage_point@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    },
    "sn_poi": {
      "type": "vector",
      "scheme": "tms",
      "tiles": [
        "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_poi@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
      ]
    }
  },
  "sprite": "http://220.202.55.239:8080/ogs_gis/cstyle//sprites/maki",
  "glyphs": "http://220.202.55.239:8080/ogs_gis/cstyle/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "basemap",
      "type": "background",
      "minzoom": 6,
      "maxzoom": 24,
      "filter": ["none"],
      "paint": {"background-color": "rgba(1, 19, 33, 1)"}
    },
    {
      "id": "area",
      "type": "fill",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(5, 6, 8, 1)"}
    },
    {
      "id": "area_dist_chuanshanqu",
      "type": "fill",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "filter": ["all", ["==", "NAME", "船山区"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "rgba(0, 0, 0, 1)",
        "fill-outline-color": "rgba(143, 200, 167, 1)"
      }
    },
    {
      "id": "area_street_zjs",
      "type": "fill",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "filter": ["all", ["==", "NAME", "镇江寺街道办事处"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(6, 32, 48, 1)"}
    },
    {
      "id": "area_street_jl",
      "type": "fill",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "filter": ["all", ["==", "NAME", "九莲街道办事处"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(6, 32, 48, 1)"}
    },
    {
      "id": "area_street_cys",
      "type": "fill",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "filter": ["all", ["==", "NAME", "慈音街道办事处"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(6, 32, 48, 1)"}
    },
    {
      "id": "drainage",
      "type": "fill",
      "source": "sn_drainage",
      "source-layer": "sn_drainage",
      "minzoom": 8,
      "paint": {"fill-color": "rgba(24, 30, 32, 1)"}
    },
    {
      "id": "house",
      "type": "fill",
      "source": "sn_house",
      "source-layer": "sn_house",
      "minzoom": 11,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(68, 98, 121, 1)"}
    },
    {
      "id": "house-copy-copy",
      "type": "fill",
      "source": "sn_house",
      "source-layer": "sn_house",
      "minzoom": 11,
      "filter": ["all", ["!in", "TYPE_", "混"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(36, 55, 70, 1)"}
    },
    {
      "id": "house-copy",
      "type": "fill",
      "source": "sn_house",
      "source-layer": "sn_house",
      "minzoom": 11,
      "filter": ["all", ["!in", "TYPE_", "混", "砖"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(67, 255, 234, 1)"}
    },
    {
      "id": "area_line",
      "type": "line",
      "source": "sn_area",
      "source-layer": "sn_area",
      "minzoom": 0,
      "maxzoom": 10,
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"stops": [[6, 1], [10, 2]]},
        "line-blur": 1
      }
    },
    {
      "id": "road_rank_other",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["!=", "RTEG", "' '"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(15, 46, 67, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
      }
    },
    {
      "id": "road_rank_gs",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "高速"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(31, 88, 101, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
      }
    },
    {
      "id": "road_rank_dw",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 12,
      "filter": ["all", ["in", "RTEG", "等外"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(77, 154, 170, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
      }
    },
    {
      "id": "road_rank_4",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 14,
      "filter": ["all", ["in", "RTEG", "四级"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(23, 52, 78, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
      }
    },
    {
      "id": "road_rank_3",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 12,
      "filter": ["in", "RTEG", "三级"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(149, 149, 149, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 2], [20, 10]]}
      }
    },
    {
      "id": "road_rank_2",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["in", "RTEG", "二级"],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(92, 202, 190, 1)",
        "line-width": {"stops": [[10, 3], [20, 10]], "base": 1.5}
      }
    },
    {
      "id": "road_rank_1",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "一级"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(182, 148, 61, 1)",
        "line-width": {"base": 1.5, "stops": [[10, 4], [20, 10]]}
      }
    },
    {
      "id": "road_rank_bjl-copy",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "滨江中路"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {"line-color": "rgba(75, 172, 189, 1)", "line-width": 2}
    },
    {
      "id": "road_rank_bjl",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "滨江路"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {"line-color": "rgba(83, 182, 199, 1)", "line-width": 2}
    },
    {
      "id": "road_rank_dsl",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "东升路"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
    },
    {
      "id": "road_rank_dsl-fd",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "东升路辅道"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(143, 143, 143, 1)",
        "line-width": 2,
        "line-opacity": 0.3
      }
    },
    {
      "id": "road_rank_yll",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "玉龙路"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
    },
    {
      "id": "road_rank_myl",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "明月路"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
    },
    {
      "id": "road_rank_shnlm",
      "type": "line",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "NAME", "上海-聂拉木"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(55, 169, 193, 1)",
        "line-width": 2,
        "line-blur": 0,
        "line-offset": 0
      }
    },
    {
      "id": "road_rank_label_other",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": ["all", ["!=", "RTEG", "' '"]],
      "layout": {
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-size": {"base": 1, "stops": [[10, 12], [22, 18]]},
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "road_rank_label-gs",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "高速"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(217, 101, 0, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(93, 125, 133, 1)",
        "text-opacity": 1
      }
    },
    {
      "id": "road_rank_label-dw",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "等外"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(217, 101, 0, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(93, 125, 133, 1)",
        "text-opacity": 1
      }
    },
    {
      "id": "road_rank_4_label",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "四级"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(217, 101, 0, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(93, 125, 133, 1)",
        "text-opacity": 1
      }
    },
    {
      "id": "road_rank_3_label",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "三级"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(217, 101, 0, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(93, 125, 133, 1)",
        "text-opacity": 1
      }
    },
    {
      "id": "road_rank_2_label",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "二级"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(217, 101, 0, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "text-opacity": 1
      }
    },
    {
      "id": "road_rank_1_label",
      "type": "symbol",
      "source": "sn_road",
      "source-layer": "sn_road",
      "minzoom": 10,
      "filter": ["all", ["in", "RTEG", "一级"]],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{RN}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-rotation-alignment": "viewport",
        "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 6,
        "text-halo-color": "rgba(255, 143, 43, 1)",
        "icon-color": "rgba(255, 143, 43, 1)",
        "icon-halo-color": "rgba(93, 125, 133, 1)",
        "text-opacity": 0.8
      }
    },
    {
      "id": "snbj_label",
      "type": "symbol",
      "source": "snbj",
      "source-layer": "snbj",
      "minzoom": 8,
      "maxzoom": 12,
      "layout": {
        "text-field": "{name}",
        "text-font": ["Noto Sans Regular"],
        "text-padding": 4,
        "text-size": {"stops": [[4, 14], [12, 18]]},
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 1,
        "text-halo-width": 1,
        "text-opacity": 0.7,
        "text-halo-color": "#08182a"
      }
    },
    {
      "id": "drainage_label",
      "type": "symbol",
      "source": "sn_drainage_point",
      "source-layer": "sn_drainage_point",
      "minzoom": 11,
      "maxzoom": 20,
      "layout": {
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-letter-spacing": 0.1,
        "text-offset": [0, -0.2],
        "text-padding": 8,
        "text-size": {"base": 1, "stops": [[10, 12], [22, 14]]}
      },
      "paint": {
        "text-color": "rgba(188, 223, 225, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(8, 24, 42, 1)",
        "text-halo-width": 1,
        "text-opacity": 1
      }
    },
    {
      "id": "house-height",
      "type": "fill-extrusion",
      "source": "sn_house",
      "source-layer": "sn_house",
      "minzoom": 11,
      "filter": ["all", ["in", "TYPE_", "混"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-extrusion-color": "rgba(87, 127, 135, 1)",
        "fill-extrusion-height": 70
      }
    },
    {
      "id": "poi_other_label",
      "type": "symbol",
      "source": "sn_poi",
      "source-layer": "sn_poi",
      "minzoom": 19,
      "filter": ["all", ["!=", "CLASS", " "]],
      "layout": {
        "text-anchor": "center",
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-max-width": ["literal", 10]
      },
      "paint": {
        "text-color": "rgba(199, 255, 255, 1)",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
        "text-halo-color": "rgba(1, 14, 14, 1)"
      }
    },
    {
      "id": "poi_c_label",
      "type": "symbol",
      "source": "sn_poi",
      "source-layer": "sn_poi",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "in",
          "CLASS",
          "CA",
          "CD",
          "DA",
          "EA",
          "FA",
          "FB",
          "GA",
          "GL",
          "GN",
          "IA",
          "KA",
          "KU"
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(255, 254, 202, 1)",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
        "text-halo-color": "rgba(8, 24, 42, 1)"
      }
    },
    {
      "id": "poi_b_label",
      "type": "symbol",
      "source": "sn_poi",
      "source-layer": "sn_poi",
      "minzoom": 14,
      "filter": ["all", ["in", "CLASS", "BA", "BA1"]],
      "layout": {
        "text-anchor": "center",
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
        "visibility": "visible",
        "text-max-width": 12
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
        "text-halo-color": "rgba(9, 38, 52, 1)"
      }
    },
    {
      "id": "poi_a_label",
      "type": "symbol",
      "source": "sn_poi",
      "source-layer": "sn_poi",
      "minzoom": 16,
      "filter": ["all", ["in", "CLASS", "AD", "AF", "AH", "AJ", "AK"]],
      "layout": {
        "text-anchor": "center",
        "text-field": "{NAME}",
        "text-font": ["Noto Sans Regular"],
        "text-offset": [0, 0],
        "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(254, 254, 255, 1)",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
        "text-halo-color": "rgba(8, 24, 42, 1)"
      }
    }
  ],
  "id": "sn_style"
};
// const mapStyle2 = {
//   "version": 8,
//   "name": "sn_style",
//   "metadata": {"maputnik:renderer": "mbgljs"},
//   "zoom": 8,
//   "sources": {
//     "sn_area": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_area@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "sn_drainage": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_drainage@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "sn_house": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_house@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "sn_road": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_road@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "snbj": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:snbj@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "sn_drainage_point": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_drainage_point@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     },
//     "sn_poi": {
//       "type": "vector",
//       "scheme": "tms",
//       "tiles": [
//         "http://220.202.55.239:8080/ogs_gis/tms/gwc/service/tms/1.0.0/cestc:sn_poi@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"
//       ]
//     }
//   },
//   "sprite": "http://220.202.55.239:8080/ogs_gis/cstyle//sprites/maki",
//   "glyphs": "http://220.202.55.239:8080/ogs_gis/cstyle/fonts/{fontstack}/{range}.pbf",
//   "layers": [
//     {
//       "id": "basemap",
//       "type": "background",
//       "minzoom": 6,
//       "maxzoom": 24,
//       "filter": ["none"],
//       "paint": {"background-color": "rgba(5, 6, 8, 1)"}
//     },
//     {
//       "id": "area",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(16, 16, 16, 1)"}
//     },
//     {
//       "id": "area_dist_chuanshanqu",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "船山区"]],
//       "layout": {"visibility": "visible"},
//       "paint": {
//         "fill-color": "rgba(21, 21, 21, 1)",
//         "fill-outline-color": "rgba(192, 112, 112, 1)"
//       }
//     },
//     {
//       "id": "area_street_njl",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "南津路街道办事处"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(1, 1, 1, 1)"}
//     },
//     {
//       "id": "area_street_kxl",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "凯旋路街道办事处"]],
//       "layout": {"visibility": "visible"},
//       "paint": {
//         "fill-color": "rgba(29, 29, 29, 1)",
//         "fill-outline-color": "rgba(214, 102, 146, 1)"
//       }
//     },
//     {
//       "id": "area_street_zjs",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "镇江寺街道办事处"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(1, 1, 1, 1)"}
//     },
//     {
//       "id": "area_street_jl",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "九莲街道办事处"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(1, 1, 1, 1)"}
//     },
//     {
//       "id": "area_street_cys",
//       "type": "fill",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "filter": ["all", ["==", "NAME", "慈音街道办事处"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(1, 1, 1, 1)"}
//     },
//     {
//       "id": "drainage",
//       "type": "fill",
//       "source": "sn_drainage",
//       "source-layer": "sn_drainage",
//       "minzoom": 8,
//       "paint": {"fill-color": "rgba(35, 40, 43, 1)"}
//     },
//     {
//       "id": "house",
//       "type": "fill",
//       "source": "sn_house",
//       "source-layer": "sn_house",
//       "minzoom": 11,
//       "filter": ["all"],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(85, 85, 85, 1)"}
//     },
//     {
//       "id": "house-copy",
//       "type": "fill",
//       "source": "sn_house",
//       "source-layer": "sn_house",
//       "minzoom": 11,
//       "filter": ["all", ["!in", "TYPE_", "混", "砖"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(243, 213, 57, 1)"}
//     },
//     {
//       "id": "house_1",
//       "type": "fill",
//       "source": "sn_house",
//       "source-layer": "sn_house",
//       "minzoom": 11,
//       "filter": ["all", ["==", "NAME", "null"]],
//       "layout": {"visibility": "visible"},
//       "paint": {"fill-color": "rgba(255, 255, 255, 1)"}
//     },
//     {
//       "id": "area_line",
//       "type": "line",
//       "source": "sn_area",
//       "source-layer": "sn_area",
//       "minzoom": 0,
//       "maxzoom": 10,
//       "paint": {
//         "line-color": "rgba(0, 0, 0, 1)",
//         "line-width": {"stops": [[6, 1], [10, 2]]},
//         "line-blur": 1
//       }
//     },
//     {
//       "id": "road_rank_other",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["!=", "RTEG", "' '"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(50, 50, 50, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_gs",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "高速"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(142, 114, 51, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_dw",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 12,
//       "filter": ["all", ["in", "RTEG", "等外"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(77, 154, 170, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_4",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 14,
//       "filter": ["all", ["in", "RTEG", "四级"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(23, 52, 78, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 1], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_3",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 12,
//       "filter": ["in", "RTEG", "三级"],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(149, 149, 149, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 2], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_2",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["in", "RTEG", "二级"],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(119, 93, 56, 1)",
//         "line-width": {"stops": [[10, 3], [20, 10]], "base": 1.5}
//       }
//     },
//     {
//       "id": "road_rank_1",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "一级"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(182, 148, 61, 1)",
//         "line-width": {"base": 1.5, "stops": [[10, 4], [20, 10]]}
//       }
//     },
//     {
//       "id": "road_rank_bjl-copy",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "滨江中路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(186, 164, 88, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_bjl",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "滨江路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(212, 181, 54, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_dsl",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "东升路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_dsl-fd",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "东升路辅道"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(143, 143, 143, 1)",
//         "line-width": 2,
//         "line-opacity": 0.3
//       }
//     },
//     {
//       "id": "house-height",
//       "type": "fill-extrusion",
//       "source": "sn_house",
//       "source-layer": "sn_house",
//       "minzoom": 13,
//       "filter": ["all", ["in", "TYPE_", "混"]],
//       "layout": {"visibility": "visible"},
//       "paint": {
//         "fill-extrusion-color": "rgba(152, 148, 73, 0.95)",
//         "fill-extrusion-height": 70
//       }
//     },
//     {
//       "id": "road_rank_yll",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "玉龙路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_myl",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "明月路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(81, 187, 186, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_shnlm",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "上海-聂拉木"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {
//         "line-color": "rgba(165, 117, 19, 1)",
//         "line-width": 2,
//         "line-blur": 0,
//         "line-offset": 0
//       }
//     },
//     {
//       "id": "road_rank_wcbfl",
//       "type": "line",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "NAME", "五彩缤纷路"]],
//       "layout": {
//         "line-cap": "round",
//         "line-join": "round",
//         "visibility": "visible"
//       },
//       "paint": {"line-color": "rgba(89, 64, 34, 1)", "line-width": 2}
//     },
//     {
//       "id": "road_rank_label_other",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 14,
//       "maxzoom": 24,
//       "filter": ["all", ["!=", "RTEG", "' '"]],
//       "layout": {
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-size": {"base": 1, "stops": [[10, 12], [22, 18]]},
//         "visibility": "visible"
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0.5,
//         "text-halo-width": 1,
//         "text-halo-color": "rgba(47, 45, 45, 1)"
//       }
//     },
//     {
//       "id": "road_rank_label-gs",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "高速"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(217, 101, 0, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(93, 125, 133, 1)",
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "road_rank_label-dw",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "等外"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(217, 101, 0, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(93, 125, 133, 1)",
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "road_rank_4_label",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "四级"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(217, 101, 0, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(93, 125, 133, 1)",
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "road_rank_3_label",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "三级"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(217, 101, 0, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(93, 125, 133, 1)",
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "road_rank_2_label",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "二级"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(217, 101, 0, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(255, 255, 255, 1)",
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "road_rank_1_label",
//       "type": "symbol",
//       "source": "sn_road",
//       "source-layer": "sn_road",
//       "minzoom": 10,
//       "filter": ["all", ["in", "RTEG", "一级"]],
//       "layout": {
//         "symbol-avoid-edges": true,
//         "symbol-placement": "line",
//         "text-anchor": "center",
//         "text-field": "{RN}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-rotation-alignment": "viewport",
//         "text-size": {"stops": [[10, 12], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-spacing": 300
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0,
//         "text-halo-width": 6,
//         "text-halo-color": "rgba(255, 143, 43, 1)",
//         "icon-color": "rgba(255, 143, 43, 1)",
//         "icon-halo-color": "rgba(93, 125, 133, 1)",
//         "text-opacity": 0.8
//       }
//     },
//     {
//       "id": "snbj_label",
//       "type": "symbol",
//       "source": "snbj",
//       "source-layer": "snbj",
//       "minzoom": 8,
//       "maxzoom": 12,
//       "layout": {
//         "text-field": "{name}",
//         "text-font": ["Noto Sans Regular"],
//         "text-padding": 4,
//         "text-size": {"stops": [[4, 14], [12, 18]]},
//         "visibility": "visible"
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 1,
//         "text-halo-width": 1,
//         "text-opacity": 0.7,
//         "text-halo-color": "#08182a"
//       }
//     },
//     {
//       "id": "drainage_label",
//       "type": "symbol",
//       "source": "sn_drainage_point",
//       "source-layer": "sn_drainage_point",
//       "minzoom": 11,
//       "maxzoom": 20,
//       "layout": {
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-letter-spacing": 0.1,
//         "text-offset": [0, -0.2],
//         "text-padding": 8,
//         "text-size": {"base": 1, "stops": [[10, 12], [22, 14]]}
//       },
//       "paint": {
//         "text-color": "rgba(188, 223, 225, 1)",
//         "text-halo-blur": 1,
//         "text-halo-color": "rgba(8, 24, 42, 1)",
//         "text-halo-width": 1,
//         "text-opacity": 1
//       }
//     },
//     {
//       "id": "poi_other_label",
//       "type": "symbol",
//       "source": "sn_poi",
//       "source-layer": "sn_poi",
//       "minzoom": 16,
//       "filter": ["all", ["!=", "CLASS", " "]],
//       "layout": {
//         "text-anchor": "center",
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "symbol-avoid-edges": false,
//         "text-max-width": ["literal", 10]
//       },
//       "paint": {
//         "text-color": "rgba(79, 202, 223, 1)",
//         "text-halo-blur": 0.5,
//         "text-halo-width": 1,
//         "text-halo-color": "rgba(1, 14, 14, 1)"
//       }
//     },
//     {
//       "id": "poi_c_label",
//       "type": "symbol",
//       "source": "sn_poi",
//       "source-layer": "sn_poi",
//       "minzoom": 14,
//       "filter": [
//         "all",
//         [
//           "in",
//           "CLASS",
//           "CA",
//           "CD",
//           "DA",
//           "EA",
//           "FA",
//           "FB",
//           "GA",
//           "GL",
//           "GN",
//           "IA",
//           "KA",
//           "KU"
//         ]
//       ],
//       "layout": {
//         "text-anchor": "center",
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
//         "visibility": "visible"
//       },
//       "paint": {
//         "text-color": "rgba(255, 254, 202, 1)",
//         "text-halo-blur": 0.5,
//         "text-halo-width": 1,
//         "text-halo-color": "rgba(8, 24, 42, 1)"
//       }
//     },
//     {
//       "id": "poi_b_label",
//       "type": "symbol",
//       "source": "sn_poi",
//       "source-layer": "sn_poi",
//       "minzoom": 14,
//       "filter": ["all", ["in", "CLASS", "BA", "BA1"]],
//       "layout": {
//         "text-anchor": "center",
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
//         "visibility": "visible",
//         "text-max-width": 12
//       },
//       "paint": {
//         "text-color": "rgba(255, 255, 255, 1)",
//         "text-halo-blur": 0.5,
//         "text-halo-width": 1,
//         "text-halo-color": "rgba(9, 38, 52, 1)"
//       }
//     },
//     {
//       "id": "poi_a_label",
//       "type": "symbol",
//       "source": "sn_poi",
//       "source-layer": "sn_poi",
//       "minzoom": 16,
//       "filter": ["all", ["in", "CLASS", "AD", "AF", "AH", "AJ", "AK"]],
//       "layout": {
//         "text-anchor": "center",
//         "text-field": "{NAME}",
//         "text-font": ["Noto Sans Regular"],
//         "text-offset": [0, 0],
//         "text-size": {"stops": [[10, 10], [22, 14]], "base": 1},
//         "visibility": "visible"
//       },
//       "paint": {
//         "text-color": "rgba(254, 254, 255, 1)",
//         "text-halo-blur": 0.5,
//         "text-halo-width": 1,
//         "text-halo-color": "rgba(8, 24, 42, 1)"
//       }
//     }
//   ],
//   "id": "sn_style"
// };
export default {
  name: "mapView",
  components: {},
  data() {
    return {
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  },
  mounted() {
    let beiji = [38.912753, -77.032194]
    this.map = this.$utils.map.createMap("map-container").setView(beiji, 2);
    const opts = {
      padding: 0.1,
      accessToken: 'pk.eyJ1IjoieWFuZ2ppYW4iLCJhIjoiY2phaG1neno0MXFkNDMzbWhwNWw0bWM4aiJ9.CFmrh0LVWAbmVeed-Xr7wA',
      // get your own MapTiler token at https://cloud.maptiler.com/ or use MapBox style
      style: mapStyle1,
      interactive: true,
      zoom: 8.9,
      pitch: 49,
      center: [105.588552,30.514188]
    }
    const gl = this.$utils.map.addMapboxGL(opts, this.map)

    const mapboxMap = gl.getMapboxMap()

    mapboxMap.on('load', () => {
      console.log('MAPBOX map loaded')

      // let's see events on mapbox map
      mapboxMap.on('mousemove', () => { console.log('MAPBOX mousemove') })
      mapboxMap.on('mouseenter', () => { console.log('MAPBOX mouseenter') })
      mapboxMap.on('mouseout', () => { console.log('MAPBOX mouseout') })
      mapboxMap.on('mouseleave', () => { console.log('MAPBOX mouseleave') })
      mapboxMap.on('mouseover', () => { console.log('MAPBOX mouseover') })

      // let's add some layer and fire events on it


      mapboxMap.on('mouseenter', 'state-fills', (e) => {console.log('state-fills mouseenter', e) })
      mapboxMap.on('mousemove', 'state-fills', (e) => {console.log('state-fills mousemove', e) })
      mapboxMap.on('mouseout', 'state-fills', (e) => {console.log('state-fills mouseout', e) })
      mapboxMap.on('mouseleave', 'state-fills', (e) => {console.log('state-fills mouseleave', e) })

    })
    mapboxMap.flyTo({
      speed: 0.15,    //速度
      zoom: 13.3,     //层级
      pitch: 49,      //倾斜角
      center: [105.588592,30.514188333]
    });

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
</style>

