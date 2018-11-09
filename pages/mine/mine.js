// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    avatarUrl:'',
    hasSite:false,
    siteData:{},
    markers: []
  },
  chooseLocation() {
   wx.chooseLocation({
     success: (res)=> {
       console.log(res)
       this.setData({
         hasSite:true,
         siteData:res
       })
       },
     fail: function(res) {},
     complete: function(res) {},
   })
  },
  aboutUs() {
    wx.openLocation({
      latitude: 26.573981,
      longitude: 101.732177,
      scale: '1',
      name: '攀枝花学院',
      address: '四川省攀枝花市东区机场路10号',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.getLocation({
     type: '',
     altitude: true,
     success:(res) => {
       const {
         latitude,
         longitude
       } = res;
       this.setData({
         markers: this.data.markers.concat({
           iconPath: "/assets/img/location.png",
           id: 0,
           latitude: 23.099994,
           longitude: 113.324520,
           width: 50,
           height: 50
         }),
         latitude,
         longitude
       })
     },
     fail: function(res) {},
     complete: function(res) {},
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