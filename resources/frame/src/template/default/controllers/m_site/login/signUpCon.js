
import SignUpHeader from '../../../view/m_site/common/loginSignUpHeader/loginSignUpHeader'
import SignUpFooter from '../../../view/m_site/common/loginSignUpFooter/loginSignUpFooter'
// import  '../../../scss/m_site/mobileIndex.scss';
import browserDb from "../../../../../helpers/webDbHelper";
import appCommonH from "../../../../../helpers/commonHelper";

export default {
  data:function () {
    return {
      username:'',
      password:'',
      signReason:'',        //注册原因
      signReasonStatus:false,
      btnLoading:false,     //注册按钮状态
      error:false,          //错误状态
      errorMessage:"",      //错误信息

      phoneStatus:'',       //绑定手机号状态
      siteMode:'',          //站点是否付费
    }
  },

  components:{
    SignUpHeader,
    SignUpFooter
  },
  methods:{
    signUpClick(){
      this.btnLoading = true;

      if (this.signReasonStatus) {
        if (this.signReason.length < 1){
          this.$toast.fail('请填写注册原因！');
          this.btnLoading = false;
        } else {
          this.setSignData();
        }
      } else {
        this.setSignData();
      }
    },
    //错误提示
    clearError(str){
      switch (str){
        case 'clear' :
          this.error = false;
          this.errorMessage = "";
          break;
        case 'blur':
          if (this.password !== ''){
            this.error = true;
          }
          break;
        default:
          this.error = false;
      };
    },

    /*
    * 接口请求
    * */
    getForum(){
      return this.appFetch({
        url:'forum',
        method:'get',
        data:{}
      }).then(res=>{
        console.log(res);
        if (res.errors){
          if (res.errors[0].detail){
            this.$toast.fail(res.errors[0].code + '\n' + res.errors[0].detail[0])
          } else {
            this.$toast.fail(res.errors[0].code);
          }
        } else {
          this.phoneStatus = res.readdata._data.qcloud.qcloud_sms;
          this.siteMode = res.readdata._data.set_site.site_mode;
          this.signReasonStatus = res.readdata._data.set_reg.register_validate;
          browserDb.setLItem('siteInfo',res.readdata);
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    setSignData(){
      this.appFetch({
        url:'register',
        method:'post',
        data:{
          "data": {
            "type": "users",
            "attributes": {
              username:this.username,
              password:this.password,
              register_reason:this.signReason
            },
          }
        }
      }).then(res => {
        console.log(res);
        this.btnLoading = false;

        this.getForum().then(()=>{
          if (res.errors){
            if (res.errors[0].detail){
              this.$toast.fail(res.errors[0].code + '\n' + res.errors[0].detail[0])
            } else {
              if (res.rawData[0].code === 'register_validate'){
                this.$router.push({path:"information-page",query:{setInfo:'registrationReview'}})
              } else {
                this.$toast.fail(res.errors[0].code);
              }
            }
          } else {
            this.$toast.success('注册成功');
            let token = res.data.attributes.access_token;
            let tokenId = res.data.id;
            let refreshToken = res.data.attributes.refresh_token;
            browserDb.setLItem('Authorization', token);
            browserDb.setLItem('tokenId', tokenId);
            browserDb.setLItem('refreshToken',refreshToken);

            if (this.phoneStatus){
              this.$router.push({path:'bind-phone'});
            } else if (this.siteMode === 'pay'){
              this.$router.push({path:'pay-the-fee'});
            } else if (this.siteMode === 'public'){
              this.$router.push({path:'/'});
            } else {
              console.log("缺少参数，请刷新页面");
            }

          }
        })
      }).catch(err=>{
        console.log(err);
      })
    }

  },
  created(){
    this.getForum();
  }

}
