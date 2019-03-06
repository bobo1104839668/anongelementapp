<template>
  <div class="addAddress">
    <mt-header title="添加收货地址" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <label class="input-text item">
        <input type="text" :value="name" @input="handleInputs({id:1,e:$event})" placeholder="收货人姓名">
      </label>
      <label class="input-text item">
        <input type="text" :value="phone" @input="handleInputs({id:2,e:$event})"  placeholder="手机号码">
      </label>
      <label class="input-text item">
        <input type="text" placeholder="省份">
        <select class="select" @change="handleClickProvince()" ref = "selectProvince">
            <option value="">请选择</option>
            <option :value="item.area_code"  :name="item.area_name"  v-for="(item,index) in provinces">{{item.area_name}}</option>
        </select>
      </label>
      <label class="input-text item">
        <input type="text" placeholder="城市">
        <select class="select"  @change="handleClickCities()" ref = "selectCities">
            <option value="">请选择</option>
            <option :value="item.area_code" :val="item.area_name" v-for="(item,index) in cities">{{item.area_name}}</option>
        </select>
      </label>
      <label class="input-text item">
        <input type="text" placeholder="区县">
        <select class="select" @change="handleClickCounties()" ref = "selectCounties">
            <option value="">请选择</option>
            <option :value="item.area_code"  :val="item.area_name"  v-for="(item,index) in counties">{{item.area_name}}</option>
        </select>
      </label>
      <label class="input-text item items">
        <textarea class="area" :value="address"  @input="handleInputs({id:3,e:$event})" placeholder="详细地址"></textarea>
      </label>
      <p>
<<<<<<< HEAD
        <input type="radio" :value="status" :checked="status==1?'checked':''" @click="handleChecked($event)">设为默认地址 
=======
        <input type="radio" :value="status" :checked="status==1?'checked':''" @click="handleChecked()">设为默认地址 
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
      </p>
      <button class="btns" @click="handleTos()">确认添加</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  created () {
    this.handleProvices();
    this.handleToId();  
  },
  computed: {
      ...Vuex.mapState({
          provinces:state=>state.personal.provinces,
          cities:state=>state.personal.cities,
          counties:state=>state.personal.counties,
          name:state=>state.personal.name,
          phone:state=>state.personal.phone,
          address:state=>state.personal.address,
          status:state=>state.personal.status,
      })
  },
  methods: {
      ...Vuex.mapActions({
          handleProvices:"personal/handleProvices",
          handleClickProvinces:"personal/handleClickProvinces",
          handleClickCitie:"personal/handleClickCitie",
          handleTo:"personal/handleTo",
          handleToId:"personal/handleToId",
<<<<<<< HEAD
          handleChecked:"personal/handleChecked",
          handleClickCounties:"personal/handleClickCounties"
=======
          handleChecked:"personal/handleChecked"
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
      }),
      ...Vuex.mapMutations({
         handleInputs:"personal/handleInputs"
      }),
      handleClickProvince(){
        this.handleClickProvinces(this.$refs.selectProvince.value);
      },
      handleClickCities(index){
        this.handleClickCitie(this.$refs.selectCities.value)
      },
      handleTos(){
        this.handleTo(this.$router);
      }
  }
};
</script>

<style lang="scss" scoped>
.addAddress {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    width: 100%;
    height: 0.88rem;
    background: #eb4339;
    border-bottom-width: 1px;
    font-size: 0.34rem;
    color: #fff;
    font-weight: 600;
    .iconfont {
      font-size: 0.4rem;
      margin-right: 0.2rem;
    }
  }
   .content {
    width: 100%;
    height: 100%;
    .select{
        border: none;
        outline: none;
        width: 20%;
        background: #fff;
        font-size: .26rem;
    }
    .input-text {
      background-color: #f4f4f0;
    }
    .items{
        height: 3rem;
        background: #fff;
    }
    .area{
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: .3rem;
      text-indent: .2rem;
      padding-top: .3rem;
    }
    .item {
      border-bottom: 1px solid #666;
      display: flex;
      input {
        font-size: 0.28rem;
        width: 100%;
        text-indent: 0.3rem;
        border: none;
        height: 0.9rem;
        outline: none;
      }
    }
    .btns {
      width: 94%;
      min-height: 0.8rem;
      line-height: 0.76rem;
      border-radius: 0.1rem;
      background-color: #eb4339;
      color: #fff;
      font-size: 0.28rem;
      padding: 0 0.24rem;
      margin: 0.5rem 0.2rem 0 0.2rem;
      border: none;
      position: absolute;
      outline: none;
      bottom: 100px;
      left: 0;
    }
  }
}
</style>