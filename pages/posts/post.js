var postsData = require('../../data/posts-data.js')
Page({
  data:{
  },
  onLoad:function(){
         this.setData({
           postList:postsData.postList
         })
  },
  onPostTap:function(e){
        var postId = e.currentTarget.dataset.postid;
        wx.navigateTo({
          url: 'post-detail/post-detail?id='+postId
        })
  },
  onSwiperTap:function(){
        var postId = e.target.dataset.postid;
        wx.navigateTo({
          url: 'post-detail/post-detail?id'+postId
        })
  }
})