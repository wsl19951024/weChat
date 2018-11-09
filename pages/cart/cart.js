// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
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
    title: [
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
   cart:[],
   totalPrice:0,
   totalCount:0,
   allChecked:false,
   hasData:true,
   focus:true
  },
changeFocus(){
 this.setData({
   focus:true
 })
},
getC(e){
 console.log(e.detail.value,e.currentTarget.dataset.id)
 const count = Number(e.detail.value);
 const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id)[0]; 
 app.setCount(cartItem,count);
 this.getTotalPrice();
},

cartItemChecked(e){
   const id = e.currentTarget.dataset.id;
   console.log(id)
    app.cartList = app.cartList.map((item) => {
      const newItem = item;
      if (newItem.id === id) {
        newItem.checked = !newItem.checked;
      }
      console.log(newItem)
      return newItem;
    });
    this.getTotalPrice();
    this.getTotalCount();
    this.isAllCartChecked();
  },
  isAllCartChecked() {
    if( app.cartList.every(item => item.checked === true)){
      this.setData({
        allChecked:true
      })
      // wx.showToast({
      //   title: '全选',
      //   icon: 'success',
      //   duration: 1000
      // });
    }else{
      this.setData({
        allChecked: false
      })
    }
  },
cartAllChecked(e){
    const checked = !e.currentTarget.dataset.checked;
    console.log(checked)
    if(checked === true){
      wx.showToast({
        title: '全选',
        icon: 'success',
        duration: 1000
      });
    }else{
        wx.showToast({
          title: '取消全选',
          icon: 'success',
          duration: 1000
        });
    }

  const newCart =  app.cartList.map(item => {
      item.checked = checked;
      return item;
    })
    this.setData({
      allChecked:checked,
      cart: newCart
    })
    this.getTotalPrice();
    this.getTotalCount();
  },
  getTotalPrice() {
    const p = app.cartList.filter(item => item.checked === true).reduce((result, item) => {
      const newResult = result + (item.cinemaCount * item.count);
      console.log(newResult)
      return newResult;
    }, 0)  
    this.setData({
      cart: app.cartList,
      totalPrice:p
    })
  },
  getTotalCount(){
    const num = app.cartList.filter(item => item.checked === true).reduce((result, item) => {
      result += item.count;
      return result;
    }, 0) 
    this.setData({
      cart: app.cartList,
      totalCount:num
    })
  },
  inc(e){
    const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id)[0];  
    app.increment(cartItem);
    this.getTotalPrice();
 
  },
  dec(e) {
    const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id)[0];
    app.decrement(cartItem);
    this.getTotalPrice();

  },
  hasCartItem(){
    if (this.data.cart.length > 0) {
      this.setData({
        hasData: false
      })
    }
  },
  delete(e) {
    const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id)[0];
    app.delete(cartItem);
    this.getTotalPrice();
    app.setBadge();
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 1000
    });
  },
  toPay(){
    wx.navigateTo({
      url: '/pages/pay/pay',
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
    this.getTotalPrice();
    this.isAllCartChecked();
    this.getTotalCount();
    this.hasCartItem();
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