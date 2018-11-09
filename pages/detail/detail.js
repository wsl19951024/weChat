// pages/detail/detail.js
// import ajax from '../../utils/request'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    flower:[],
    imgUrls: [    'http://resource.iishang.com/product/20170714/68071c4d-019b-43a6-86d5-08c1845bb060.jpg?x-oss-process=style/style_short',
      'http://resource.iishang.com/product/20170714/bb3c6610-b102-4bb8-9692-c50c16b59010.jpg?x-oss-process=style/style_short',
      'http://resource.iishang.com/product/20170714/882babe6-bba8-45a1-b42c-b3063171c3b4.jpg?x-oss-process=style/style_short',
      'http://resource.iishang.com/product/20170714/4b74a971-e0a3-4da5-8e66-8645f7b1d3ed.jpg?x-oss-process=style/style_short',
      'http://resource.iishang.com/product/20170714/8af0a078-a756-48de-a2e3-4419647a67ee.jpg?x-oss-process=style/style_short'
    ],
    isChecked:false,
    kuanshi:[
      '空谷花瓶',
      '灰耀石',
      '星河鲜花瓶',
      '樱花舞',
      'Victoria',
      '森林风系列B款'
    ]
  },
  toPay(){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  goHome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
    app.setBadge();
  },
  goCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
    app.setBadge();
  },
  changeStyle(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      isChecked:!this.data.isChecked
    })
  },
  addToCart() {
    const cartItem = this.data.flower[0];
    app.addToCart(cartItem);
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
    console.log(options);
    wx.request({
      url: `https://m.maizuo.com/v4/api/film/${options.id}?__t=1541472274665`,
      success: (res) => {
        const flower = [];
        flower.push(res.data.data.film)
        this.setData({
          flower
        })
      }
    })
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