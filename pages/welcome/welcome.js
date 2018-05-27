Page({
  onTap: function () {
    // wx.navigateTo({
    //   url: '../posts/post',
    // })
    console.log(1)
    wx.redirectTo({
      url: '../posts/post'
    })
  },
  onUnload: function () {
    console.log(1)
  },
  onHide: function () {
    console.log(2)
  }
})