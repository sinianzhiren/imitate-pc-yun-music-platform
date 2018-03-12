<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default{
      props: ['message'],
      data: function () {
        return{

        }
      },
    watch: {
      message: function (val, oldVal) {
          console.info(val, oldVal);
        }
    },
    methods: {
          getVal: function () {
            let _this = this;
            _this.$axios.post('/api/findStation',{
                type: _this.message
            },{
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                responseType: 'json'
            })
              .then(function (res) {
                console.log(res.data)
              })
              .catch(function (err) {
                console.log(err)
              })
          }
    }


  }
</script>

<style scoped>

</style>
