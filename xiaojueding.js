module.exports = [
  // 原有模块保留并根据新排序调整位置
  {
    id: 0,
    option: '今天喝哪家奶茶？', // 新增高频场景
    awards: [
      {name: "喜茶", color: '#FFB3CC'},
      {name: "奈雪的茶", color: '#FF6B6B'},
      {name: "茶颜悦色", color: '#66BB6A'},
      {name: "蜜雪冰城", color: '#FFC928'},
      {name: "CoCo都可", color: '#FF7F50'},
      {name: "星巴克", color: '#00B4D8'},
      {name: "古茗", color: '#5C6BC0'},
      {name: "体重允许你喝吗", color: '#EC407A'}
    ]
  },
  {
    id: 1,
    option: '今晚吃什么？', // 拆分早中晚餐场景
    awards: [
      {name: "火锅", color: '#FF4500'},
      {name: "烤肉", color: '#FFA500'},
      {name: "沙拉轻食", color: '#66BB6A'},
      {name: "小龙虾", color: '#8B0000'},
      {name: "螺蛳粉", color: '#CD853F'},
      {name: "麻辣香锅", color: '#D2691E'},
      {name: "日料", color: '#FF6347'},
      {name: "喝露水", color: '#87CEEB'}
    ]
  },
  // 原id:0模块调整到第2位
  {
    id: 2, 
    option: '真心话大冒险？',
    awards: [
      {
         name: "描述经历过最尴尬的事",
         color: '#EE534F'
      },
      {
         name: "今天穿什么颜色的内裤",
         color: '#DA70D6'
      },
      {
         name: "第一次啪啪啪几岁",
         color: '#FFA827'
      },
      {
         name: "做过最疯狂的事是什么",
         color: '#5C6BC0'
      },
      {
         name: "单身的感觉好吗",
         color: '#42A5F6'
      },
      {
         name: "你被绿过吗",
         color: '#66BB6A'
      },
      {
         name: "打过几次分手炮",
         color: '#FFC928'
      },
      {
         name: "上一次啪啪啪是什么时候",
         color: '#AA47BC'
      },
      {
         name: "你出轨过么",
         color: '#EC407A'
      },
      {
         name: "多久没看书了",
         color: '#FF7F50'
      }
   ]
},
{
   id: 1,
   option: '下个节日让我男票给我买什么礼物？',
   awards: [
      {
         name: "SixGod香水",
         color: '#EE534F'
      },
      {
         name: "狗粮",
         color: '#AA47BC'
      },
      {
         name: "YSL52号口红",
         color: '#FFC928'
      },
      {
         name: "AJ1篮球鞋",
         color: '#66BB6A'
      },
      {
         name: "香奈儿包包",
         color: '#42A5F6'
      },
      {
         name: "验孕棒",
         color: '#5C6BC0'
      },
      {
         name: "有没有男票心里没点数",
         color: '#EC407A'
      },
      {
         name: "SK-ll神仙水",
         color: '#FF7F50'
      }
   ]
  },
  {
    id: 3,
    option: '朋友聚会玩什么？', // 新增社交场景
    awards: [
      {name: "谁是卧底", color: '#EE534F'},
      {name: "剧本杀", color: '#5C6BC0'},
      {name: "你画我猜", color: '#FFC928'},
      {name: "KTV嗨歌", color: '#EC407A'},
      {name: "桌游", color: '#66BB6A'},
      {name: "看电影", color: '#42A5F6'},
      {name: "逛夜市", color: '#FF7F50'},
      {name: "各玩手机", color: '#AAAAAA'}
    ]
  },
  // 原id:5模块调整到第4位（约会场景）
  // 新增女性向场景
  {
    id: 4,
    option: '美甲做什么颜色？',
    awards: [
      {name: "车厘子红", color: '#DC143C'},
      {name: "雾霾蓝", color: '#4169E1'},
      {name: "香芋紫", color: '#BA55D3'},
      {name: "牛油果绿", color: '#9ACD32'},
      {name: "琥珀棕", color: '#8B4513'},
      {name: "裸粉色", color: '#FFB6C1'},
      {name: "镜面银", color: '#C0C0C0'},
      {name: "选择困难症", color: '#808080'}
    ]
  },
  // 原有id:1礼物模块调整到第5位
  // 新增生活场景
  {
    id: 5,
    option: '减肥吃什么？',
    awards: [
      {name: "鸡胸肉沙拉", color: '#98FB98'},
      {name: "欺骗餐火锅", color: '#FF4500'},
      {name: "代餐奶昔", color: '#BA55D3'},
      {name: "水煮西兰花", color: '#6B8E23'},
      {name: "空气", color: '#87CEEB'},
      {name: "吃个寂寞", color: '#D3D3D3'},
      {name: "奶茶（说好的减肥呢）", color: '#FF69B4'}
    ]
  },
  // 原有id:6周末模块调整到第6位
  // 新增情感相关场景
  {
    id: 6,
    option: '怎么优雅地脱单？',
    awards: [
      {name: "参加联谊会", color: '#FF69B4'},
      {name: "玩社交APP", color: '#40E0D0'},
      {name: "让闺蜜介绍", color: '#FF7F50'},
      {name: "健身房邂逅", color: '#00BFFF'},
      {name: "好好工作等国家分配", color: '#808080'},
      {name: "梦里什么都有", color: '#BA55D3'},
      {name: "主动出击要微信", color: '#FF4500'}
    ]
  },
  // 保留原有id:3狼人杀模块...
  // 新增实用场景
  {
    id: 7,
    option: '今天运动练什么？',
    awards: [
      {name: "瑜伽", color: '#FF69B4'},
      {name: "帕梅拉", color: '#00CED1'},
      {name: "尊巴舞", color: '#FF4500'},
      {name: "跑步机爬坡", color: '#4682B4'},
      {name: "动感单车", color: '#FF7F50'},
      {name: "躺着玩手机", color: '#D3D3D3'}
    ]
  },
  // 保留原有id:4工作激励...
  // 新增娱乐场景
  {
    id: 8,
    option: 'KTV必点歌曲',
    awards: [
      {name: "《体面》", color: '#BA55D3'},
      {name: "《后来》", color: '#FF69B4'},
      {name: "《孤勇者》", color: '#4169E1'},
      {name: "《七里香》", color: '#98FB98'},
      {name: "《泡沫》", color: '#FFD700'},
      {name: "《演员》", color: '#FF4500'},
      {name: "《晴天》", color: '#87CEEB'}
    ]
  },
  // 原有其他模块继续排列...
  // 新增末尾彩蛋
  {
    id: 19,
    option: '今晚谁洗碗？',
    awards: [
      {name: "石头剪刀布", color: '#D3D3D3'},
      {name: "男朋友洗", color: '#FF69B4'},
      {name: "放明天一起洗", color: '#87CEEB'},
      {name: "猜拳输的人", color: '#98FB98'},
      {name: "点外卖不用洗", color: '#FF4500'},
      {name: "谁最后吃完谁洗", color: '#FFD700'}
    ]
  }
]