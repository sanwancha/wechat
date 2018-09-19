Page({
  onTap:function(){
    //从父级跳转到子级页面，子级页面有返回按钮可以返回父页面
    // wx.navigateTo({
    //   url: "../posts/post",
    // });

    //从一个页面平级的跳转到另一个页面，没有返回按钮
    wx.redirectTo({
      url: "../posts/post"
    })
  },
})