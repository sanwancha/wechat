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
      var postData=[
        {
          avatar: "../../images/posts/user_avatar/user-avatar1.png",
          image: "../../images/posts/img_crab/img_crab1.jpg",
          date: "Oct 25 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "48",
          post_collection: "56",
          img_condition: true,
        },
        {
          avatar: "../../images/posts/user_avatar/user-avatar2.png",
          image: "../../images/posts/img_crab/img_crab2.jpg",
          date: "Oct 10 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "32",
          post_collection: "66",
          img_condition: true,
        },
        {
          avatar: "../../images/posts/user_avatar/user-avatar3.png",
          image: "../../images/posts/img_crab/img_crab3.jpg",
          date: "Oct 08 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "54",
          post_collection: "32",
          img_condition: true,
        },
        {
          avatar: "../../images/posts/user_avatar/user-avatar4.png",
          image: "../../images/posts/img_crab/img_crab4.jpg",
          date: "Oct 01 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "45",
          post_collection: "78",
          img_condition: true,
        },
        {
          avatar: "../../images/posts/user_avatar/user-avatar5.png",
          image: "../../images/posts/img_crab/img_crab5.jpg",
          date: "Sep 20 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "35",
          post_collection: "78",
          img_condition: true,
        },
        {
          avatar: "../../images/posts/user_avatar/user-avatar6.png",
          image: "../../images/posts/img_crab/img_crab6.jpg",
          date: "Sep 13 2018",
          title: "正是虾肥蟹壮时",
          content: "“菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的滴露”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“敖封嫩玉双双满”。",
          post_view: "12",
          post_collection: "35",
          img_condition: true,
        }
      ]
      this.setData({
          postKey:postData
        });
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