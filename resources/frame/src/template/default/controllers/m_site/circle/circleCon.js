/**
 * pc 端首页控制器
 */

export default {
	data: function() {
		return {
			
		}
	},
	
	methods: {	
		/**
		 * 给导航添加点击状态
		 */
		addClass:function(index,event){
            this.current=index;
             
　　　　　　 //获取点击对象      
           var el = event.currentTarget;
           // alert("当前对象的内容："+el.innerHTML);
        },
        //筛选
        screen:function(){
        	
        }

		
	},

	mounted: function() {
		// this.getVote();
		// window.addEventListener('scroll', this.handleTabFix, true);
	},
	beforeRouteLeave (to, from, next) {
	   // window.removeEventListener('scroll', this.handleTabFix, true)
	   // next()
	}
}