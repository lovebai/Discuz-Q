export default {
  data:function () {
    return {
      headerTitle:"",
      pageName:""
    }
  },

  methods:{
    headerBack(){
      console.log("回退");
      this.$router.go(-1)
    }
  },

  mounted (){
    this.pageName = this.$router.history.current.name;
    if (this.pageName === 'modify-data'){
      this.headerTitle="修改资料"
    }
  }

}
