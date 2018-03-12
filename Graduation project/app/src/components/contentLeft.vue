<template>
  <div class="left">
    <child-top></child-top>
    <child-center></child-center>
    <child-bottom @acceptChild="getChildMessage"></child-bottom>
  </div>
</template>

<script>
  import ChildTop from './contentLeft-child/contentTop.vue'
  import ChildCenter from './contentLeft-child/childCenter.vue'
  import ChildBottom from './contentLeft-child/childBottom.vue'
  export default{
      components: {
        ChildTop: ChildTop,
        ChildCenter: ChildCenter,
        ChildBottom: ChildBottom
      },
    data: function () {
      return{


      }
    },
    methods:{
      getChildMessage: function (data) {
        this.$emit('getChildMessage',data)
      }
    }
  }
</script>

<style scoped>
  .left{
    width: 800px;
    display: inline-block;
    padding: 20px 20px 80px;
    background: #fff;
  }

</style>
