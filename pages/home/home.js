// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://resource.iishang.com/home/slide/822515ef-2e1e-4310-8305-738399e76de6.jpg',
      'http://resource.iishang.com/home/slide/807c59ad-8637-42d1-9b7a-9bfec2c5c7d1.jpg'
    ],
    subscription:[
      {
        id:1,
        title:'缤纷设计鲜花系列',
        price:59.90,
        img:'http://resource.iishang.com/home/product/475656ae-a44b-44de-9d27-8dbab9d97a4a.jpg'
      },
      {
        id: 2,
        title: '纯真单品鲜花系列',
        price: 99.90,
        img: 'http://resource.iishang.com/home/product/cd228a5d-ddc9-49ec-a55c-9a2d850f61db.jpg'
      },
      {
        id: 3,
        title: '纯真单品鲜花系列',
        price: 209.90,
        img: 'http://resource.iishang.com/home/product/b3b35769-1833-4f27-9aaa-955cf1c4dfcc.jpg'
      },
      {
        id: 4,
        title: '为爱而来-非洲进口玫瑰系列',
        price: 99.90,
        img: 'http://resource.iishang.com/home/product/72fe87ab-6abb-488f-9633-f43255c3b718.jpg'
      },
      {
        id: 5,
        title: '轻奢甄选鲜花系列',
        price: 129.90,
        img: 'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg'
      }
    ],
    singleflowergift:[
      {
        id:6,
        title:'【送TA】33支玫瑰系列',
        price: 199.90,    img:'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/BC01786E7ECAD9B352A54A57D98C6912.jpg'
      },
      {
        id: 7,
        title: '【送长辈】感恩&关怀款',
        price: 169.90, 
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/14.jpg'
      },
      {
        id: 8,
        title: '【送TA】19支玫瑰款',
        price: 199.90,
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/15.jpg'
      },
      {
        id: 9,
        title: '【送TA】明艳雪山',
        price: 169.90, 
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/16.jpg'
      },
      {
        id: 10,
        title: '【新品】一篮春色',
        price: 299.90, 
        img: 'http://resource.iishang.com/home/product/bd7dbdc5-41e9-4e06-a547-5bcaaee366f9.jpg'
      },
      {
        id: 11,
        title: '【星座花礼】星座鲜花',
        price: 269.90, 
        img: 'http://resource.iishang.com/home/product/0100153e-6807-41c2-93f0-688b0777bf08.jpg'
      }
    ],
    immortal:[
      {
        id:12,
        title:'【七夕款】许愿流光瓶',
        price:198.00,
        img:'http://resource.iishang.com/home/product/57e62118-a9ab-485e-b4b4-cad5c743670e.jpg'
      },
      {
        id: 13,
        title: '【永生花】爱的抱抱',
        price: 199.00,
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/17.jpg'
      },
      {
        id: 14,
        title: '香皂花/永生花特卖',
        price: 68.00,
        img: 'http://resource.iishang.com/home/product/a778c192-3902-4fff-ad29-9f6fe39757c5.jpg'
      },
      {
        id: 15,
        title: '【永生花】星座永生花',
        price: 279.00,
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/18.jpg'
      },
      {
        id: 16,
        title: '【永生花】星光如梦',
        price: 279.00,
        img: 'http://resource.iishang.com/home/product/554e593d-23e1-46cb-8b4b-34626634f322.jpg'
      },
      {
        id: 17,
        title: '进口永生花音乐盒',
        price: 199.00,
        img: 'http://resource.iishang.com/home/product/928b8568-9d93-4b59-96b9-9796a17ca1fa.jpg'
      }
    ],
    macrame:[
      {
        id:18,
        title:'手工气泡花瓶',
        price: 109.00,
        img:'http://resource.iishang.com/home/product/1239c828-ba7a-4b46-98ae-533a9fc47805.jpg'
      },
      {
        id: 19,
        title: '日本板源花剪',
        price: 139.00,
        img: 'http://resource.iishang.com/home/product/87efb962-3235-4519-9ff7-174d0f5b9efd.jpg'
      },
      {
        id: 20,
        title: '樱花舞',
        price: 59.00,
        img: 'http://resource.iishang.com/home/product/1ba2ca51-70b6-43a2-9a86-b2287843ac19.jpg'
      },
      {
        id: 21,
        title: '爱上花瓶集锦',
        price: 59.00,
        img: 'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/21.jpg'
      }
    ]
  },
  toMall() {
    wx.switchTab({
      url: '/pages/mall/mall',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})