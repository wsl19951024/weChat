//app.js
App({
  onLaunch() {
    if(this.cartList.length>0){
      this.setBadge();
    } 
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  setBadge(){
    const num = this.cartList.reduce((result,item) => {
      result += item.count;
      return result;
    },0);
    wx.setTabBarBadge({
      index: 2,
      text: `${num}`,
    })
  },
  cartList:wx.getStorageSync("flower") || [],

  // getAllPrice() {
  //   return  this.cartList.reduce((result,item) => {
  //     const newResult = result + (item.cinemaCount * item.count);
  //     return newResult;
  //   },0)  
  // },
  delete(cartItem){
   this.cartList = this.cartList.filter(item => item.id !== cartItem.id) 
      this.setBadge();
      // this.getAllPrice();
    wx.setStorageSync("flower", this.cartList)
  },
  increment(cartItem){
    this.cartList.map(item => {
      if(item.id === cartItem.id){
        item.count += 1;
      }
      return item;
    })
    this.setBadge();
    // this.getAllPrice();
    wx.setStorageSync("flower", this.cartList)
  },
  setCount(cartItem,num){
    this.cartList.map(item => {
      if (item.id === cartItem.id) {
          item.count =  num;
      }
      return item;
    })
    this.setBadge();
    // this.getAllPrice();
    wx.setStorageSync("flower", this.cartList)
  },
  decrement(cartItem) {
    console.log(cartItem.count);
    this.cartList.map(item => {
      if (item.id === cartItem.id) {
        if(item.count > 1){
          item.count -= 1;
        }
        
      }
      return item;
    })
    this.setBadge();
    // this.getAllPrice();
    wx.setStorageSync("flower", this.cartList)
  },
  addToCart(cartItem){
    const isInCart = this.cartList.some(item => item.id === cartItem.id)
    if(isInCart){
      this.cartList = this.cartList.map(thisItem => {
        if(thisItem.id === cartItem.id){
          thisItem.count += 1 ;
        }
        return thisItem;
      })
    }else{
      this.cartList.push({
        ...cartItem,
        count:1,
        checked: false
      });
    }
    this.setBadge();
    // this.getAllPrice();
    wx.setStorageSync("flower", this.cartList)
  }
  
})
