
<template>

  <div class="home">  
     <div class="Header">
         <img src="../../assets/1588037655561.jpeg" alt="" class="img">
     </div>
     <div class="map">

     </div>
     <div class="Aimg">
         <div class="wrap">

 <el-row>
  <el-col :span="8"><div class="grid-content bg-purple">商家</div></el-col>
  <!-- <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>
<el-row v-for="(item,index) in list" :key="index">
  <el-col :span="8"><div class="grid-content bg-purple">{{item}}</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">*9</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">￥17.00</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple-light">配送费</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">￥15</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple-light">红包</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">￥15</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple">总计</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">已减￥3.00</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">￥25.00</div></el-col>
</el-row>

         </div>

         <div class="wrap">
            <el-row>
  <el-col :span="8"><div class="grid-content bg-purple">订单信息</div></el-col>
  <!-- <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>
<el-row >
  <el-col :span="8"><div class="grid-content bg-purple">配送地址</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">四川成都简阳养马镇</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple-light">订单号</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">13668136698741</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple-light">支付方式</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">微信钱包</div></el-col>

</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple">下单时间</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">2020-04-22 12:55</div></el-col>
</el-row>
         </div>
     </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      imgList: ["../../assets/qure.png", "../../assets/qure.png"],
      list: ["coco", "一只酸牛奶", "避风塘", "优乐美"]
    };
  }
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
.el-row {
  // justify：space-between
  // margin-bottom: 20px
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 20px;
  text-align: left; //左对齐
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.aimg {
  float: left;
}
.img {
  width: 100%;
  height: 200px;
}
//订单完成
.Header {
  width: 100%;
  height: 200px;
  //   background-color: aquamarine;
}
//成功
.head-ses {
  text-align: center;
}
//三个一
.head-box {
  margin: 0 auto;
}
.head-box > li {
  width: 292rpx;
  height: 84rpx;
  background-color: pink;
  float: left;
  text-align: center;
}
.head-box > li:nth-child(1) {
  background-color: red;
}

//地图
.map {
  width: 100%;
  height: 200px;
  background-color: bisque;
}
.wrap{
    margin-bottom: 20px;
}
</style>

