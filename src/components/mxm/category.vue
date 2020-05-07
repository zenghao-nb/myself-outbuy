<template>
<div class="background">
    <div class="order">
      <div  v-for="(obj,index) in tabList" :key="index" v-on:click="Tab(index)" id="l1">{{obj}}</div>
    </div>
  <!-- 订单 -->
       <div class="his-order" v-on:click="news(index)" v-for='(arr,index) in goodsList' :key="index" v-show="arr.type == num+1">
         <div>
         <div>  
                <p  class="time"> 预计<span>12:20</span>到达 </p>
    <img alt="Vue logo" src="../../assets/1588037655561.jpeg" class="img">
          </div>
            <div class="chinese">
                <p>牛排顶韩国</p>
                <p>牛排顶韩国套餐</p>
                <p>￥{{arr.price}}</p>
                <p class="timer"><span>2020-4-23</span><span>12:00</span></p>
            </div>
            <div class="orderRight">
                <div class="rem">{{arr.gg}}</div>
                <div class="sure">{{arr.yy}}</div>
                <p>{{arr.dd}}</p>
            </div>      
      </div>
      </div>
   </div> 
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
      num: 0,
      tabList: ["当前订单", "历史订单", "退款"],
      goodsList: [
        { name: "mm", type: 1, time: 10, yy: "取消", gg: "催单", price: 12 },
         { name: "mm", type: 1, time: 10, yy: "取消", gg: "催单", price: 12 },
          { name: "mm", type: 1, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 2, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 2, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 3, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 3, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 3, time: 10, yy: "取消", gg: "催单", price: 12 },
        { name: "mm", type: 3, time: 10, yy: "取消", gg: "催单", price: 12 }
      ]
    };
  },
  components: {},
  methods: {
    news(index) {
      this.$router.push({
        path: "/detail"
      });
    },
    Tab(index) {
      this.num = index;
      console.log(index);
    }
  }
};
</script>
<style scoped>
.background{
  background-color: #f8f8f8;
}
.order {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
    background-color: #fff;
}

.his-order {
  width: 100%;
  height: 170px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  margin-top: 20px;
}
/* 左边 */
.time {
  color: #000;
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 14px;
}
.time > span {
  font-size: 20px;
  color: #8db4f9;
}

.img {
  width: 100px;
  height: 100px;
  /* margin-top: 10px; */
  border-radius: 50%;
  position: absolute;
  top: 44px;
  left: 14px;
}
/* 中间盒子 */
.chinese {
  height: 200px;
  position: absolute;
  left: 125px;
  top: 25px;
}
.chinese > p {
  text-align: left;
  line-height: 16px;
  padding: 0;
}
.chinese > p:nth-child(1) {
  color: #2f2f2f;
  font-size: 18px;
  font-weight: bold;
}
.chinese > p:nth-child(2) {
  color: #292929;
  font-size: 16px;
}
.chinese > p:nth-child(3) {
  color: #fd3d00;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 180px;
  top: 32px;
}
.chinese > p:nth-child(4) {
  color: #aaaaaa;
  font-size: 12px;
}

/* 右盒子  */
.orderRight {
  position: absolute;
  top: 130px;
  left: 220px;
}

.rem {
  width: 55px;
  height: 23px;
  border: 1px solid #8bbbfd;
  border-radius: 30px;
  display: inline-block;
  color: #989898;
}
.sure {
  width: 55px;
  height: 23px;
  border: 1px solid #8bbbfd;
  border-radius: 30px;
  display: inline-block;
  margin-left: 20px;
  color: #989898;
}
</style>