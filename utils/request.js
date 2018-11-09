export default {
  get: (url) => {
    wx.showLoading({
      title: 'Loading...',
    })
    return new Promise((reslove, reject) => {
      wx.request({
        url:`https://m.maizuo.com${url}`,
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          reslove(res)
        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) {
          wx.hideLoading();
        },
      })
    })
  }
}