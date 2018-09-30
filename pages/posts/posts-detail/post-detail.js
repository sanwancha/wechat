var postsData = require("../../../data/posts_data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postid = options.id;
    this.data.currentPostId = postid;
    var postData = postsData.postList[postid];
    this.setData({
      postDetailKey: postData
    });
    var postsCollected = wx.getStorageSync("posts_collected");
    if (postsCollected){
      var postCollected = postsCollected[postid]
      if (postCollected){
        this.setData({
          collected: postCollected
        })
      };
    }else{
      var postsCollected = {};
      postsCollected[postid] = [false];
      wx.setStorageSync("posts_collected", postsCollected)
    }
  },

  onCollectionTap:function(event){
    var postsCollected = wx.getStorageSync("posts_collected");
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变为未收藏，为收藏变为收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    // 更新文章是否的缓存值
    wx.setStorageSync("posts_collected", postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
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