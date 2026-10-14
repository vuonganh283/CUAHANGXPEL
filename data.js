var APP_DATA = {
  "scenes": [
    {
      "id": "0-ca-hng-xpel",
      "name": "CỬA HÀNG XPEL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4551470961033086,
          "pitch": 0.22044408046964392,
          "rotation": 0,
          "target": "1-khu-vc-thi-cng"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-khu-vc-thi-cng",
      "name": "KHU VỰC THI CÔNG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.096436475665495,
          "pitch": 0.6227709690989709,
          "rotation": 0,
          "target": "0-ca-hng-xpel"
        },
        {
          "yaw": 0.025102868176887227,
          "pitch": 0.36597094017951903,
          "rotation": 0,
          "target": "2-khung-vc-phng-khch"
        },
        {
          "yaw": -0.004301574457647561,
          "pitch": 0.18085536263814106,
          "rotation": 0,
          "target": "3-khu-vc-tri-nghim"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-khung-vc-phng-khch",
      "name": "KHUNG VỰC PHÒNG KHÁCH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.135072548239382,
          "pitch": 0.5241085248533679,
          "rotation": 0,
          "target": "1-khu-vc-thi-cng"
        },
        {
          "yaw": -3.139154497334582,
          "pitch": 0.2292146655658982,
          "rotation": 0,
          "target": "0-ca-hng-xpel"
        },
        {
          "yaw": -0.059060325388932355,
          "pitch": 0.4384140629127202,
          "rotation": 0,
          "target": "3-khu-vc-tri-nghim"
        },
        {
          "yaw": 0.1345446551559153,
          "pitch": 0.22349050881187438,
          "rotation": 0,
          "target": "4-tng-quan-ca-hng"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-khu-vc-tri-nghim",
      "name": "KHU VỰC TRẢI NGHIỆM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9043222824583452,
          "pitch": 0.4209701046358294,
          "rotation": 0,
          "target": "4-tng-quan-ca-hng"
        },
        {
          "yaw": -3.116487634876197,
          "pitch": 0.45602264179180807,
          "rotation": 0,
          "target": "2-khung-vc-phng-khch"
        },
        {
          "yaw": -3.115361663493335,
          "pitch": 0.18617489172511625,
          "rotation": 0,
          "target": "1-khu-vc-thi-cng"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tng-quan-ca-hng",
      "name": "TỔNG QUAN CỦA HÀNG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18046920325119764,
          "pitch": 0.35027116777237666,
          "rotation": 0,
          "target": "3-khu-vc-tri-nghim"
        },
        {
          "yaw": -0.6421824583054576,
          "pitch": 0.22847581898293967,
          "rotation": 0,
          "target": "2-khung-vc-phng-khch"
        },
        {
          "yaw": -0.7733894307359321,
          "pitch": 0.12398083072190147,
          "rotation": 0,
          "target": "0-ca-hng-xpel"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
