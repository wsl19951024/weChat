// pages/mall/mall.js
import ajax from '../../utils/request.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flowers:[],
    imgs:[
      'http://resource.iishang.com/home/product/57e62118-a9ab-485e-b4b4-cad5c743670e.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/17.jpg',
      'http://resource.iishang.com/home/product/a778c192-3902-4fff-ad29-9f6fe39757c5.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/18.jpg',
      'http://resource.iishang.com/home/product/554e593d-23e1-46cb-8b4b-34626634f322.jpg',
      'http://resource.iishang.com/home/product/f48f7d6c-d46f-490f-a6fb-38ea61e286fa.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/475656ae-a44b-44de-9d27-8dbab9d97a4a.jpg',
      'http://resource.iishang.com/home/product/cd228a5d-ddc9-49ec-a55c-9a2d850f61db.jpg',
      'http://resource.iishang.com/home/product/72fe87ab-6abb-488f-9633-f43255c3b718.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/57e62118-a9ab-485e-b4b4-cad5c743670e.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/17.jpg',
      'http://resource.iishang.com/home/product/a778c192-3902-4fff-ad29-9f6fe39757c5.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/18.jpg',
      'http://resource.iishang.com/home/product/554e593d-23e1-46cb-8b4b-34626634f322.jpg',
      'http://resource.iishang.com/home/product/f48f7d6c-d46f-490f-a6fb-38ea61e286fa.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/475656ae-a44b-44de-9d27-8dbab9d97a4a.jpg',
      'http://resource.iishang.com/home/product/cd228a5d-ddc9-49ec-a55c-9a2d850f61db.jpg',
      'http://resource.iishang.com/home/product/72fe87ab-6abb-488f-9633-f43255c3b718.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/18.jpg',
      'http://resource.iishang.com/home/product/554e593d-23e1-46cb-8b4b-34626634f322.jpg',
      'http://resource.iishang.com/home/product/f48f7d6c-d46f-490f-a6fb-38ea61e286fa.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/475656ae-a44b-44de-9d27-8dbab9d97a4a.jpg',
      'http://resource.iishang.com/home/product/cd228a5d-ddc9-49ec-a55c-9a2d850f61db.jpg',
      'http://resource.iishang.com/home/product/72fe87ab-6abb-488f-9633-f43255c3b718.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg',
      'http://resource.iishang.com/home/product/475656ae-a44b-44de-9d27-8dbab9d97a4a.jpg',
      'http://resource.iishang.com/home/product/cd228a5d-ddc9-49ec-a55c-9a2d850f61db.jpg',
      'http://resource.iishang.com/home/product/72fe87ab-6abb-488f-9633-f43255c3b718.jpg',
      'http://resource.iishang.com/home/product/b9bf0eaf-82d3-48ba-94e1-9681c9cbe922.jpg'


    ],
    title:[
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶',
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶',
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶',
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶',
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶',
      '【送长辈】感恩 & 关怀款',
      '【送长辈】感恩&关怀款',
      '【送TA】19支玫瑰款',
      '【送TA】明艳雪山',
      '【七夕款】许愿流光瓶'
    ],
    page:1,
    count:5,
    total:0
  },
  toDetail(e){
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  loadFlower(){
    if (this.data.page === this.data.total) {
      return;
    }
    console.log(this.data.total,this.data.page)
    const time = new Date().getTime();
    ajax.get(`/v4/api/film/now-playing?__t=${time}&page=${this.data.page}&count=${this.data.count}`)
      .then((res) => {
        console.log(res);
        this.setData({
          flowers: this.data.flowers.concat(res.data.data.films),
          page: this.data.page + 1,
          total: res.data.data.page.total
        });
      })
 
  },
  loadMore() {
    this.loadFlower();
  },
  refresh(){
    if(this.data.page ===1){
      return;
    }
    this.setData({
      page:1,
      total:0,
      floewrs:[]
    },()=>{
      this.loadFlower();
    })
  },
  addToCart(e){
    const carItem = this.data.flowers.filter(item => item.id === e.currentTarget.dataset.id)[0]
    console.log(carItem);
    app.addToCart(carItem);
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadFlower();
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