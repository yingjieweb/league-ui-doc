<template>
  <div class="notFound">
    <doc-post>
      <div class="sorry">
        <img src="../../assets/images/sorry.jpg" alt="404">
      </div>
      <div class="tipNum"><span>{{count}}</span></div>
    </doc-post>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound',
    data() {
      return {
        count: 9
      }
    },
    mounted(){
      this.load()
    },
    methods: {
      load(){
        const timeout = setInterval(()=>{
          if (this.count !== 0){
            this.count --;
          }else {
            this.$router.push('/intro');
            window.clearInterval(timeout);
          }
        },1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notFound{
    overflow: hidden;
  }
  .sorry {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    /*background-image: url(http://www.qijishow.com/img/sorry.jpg);*/
  }
  .tipNum {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Impact;
    font-size: 390px;
    margin-top: -200px;
    color: #BDBDBD;
  }
</style>
