/* ========== */
/* = Vue.easyUtil by qy 2017.3.8 = */
/* = easy-using for html DOM structure and data    = */
/* = continue updating  = */
/* = CopyRight by qy  = */
/* ========== */

//默认值
var _s = Vue.prototype._s
Vue.prototype._s = function (s) {
  if(typeof s === 'number'){
  	return _s.call(this, s)
  }else{
  	return _s.call(this, s || "--")
  } 
}
//  = 下拉框 = 
Vue.component('selected',{
	props : ['id','text'],
	template: '\
	<div :id="idName" class="dropdown blueForm" @click="openMenu()" :class="openClass">\
		<button type="button" class="dropdown-toggle easyUtil-flexContainerRow" data-toggle="dropdown">\
			<span class="">{{text}}</span>\
			<i class="easyUtil-fBlue downarray"></i>\
		</button>\
		<ul class="dropdown-menu dropdown-menu-right">\
			<slot>\
				<li>\
					<a class="" val="">下拉框默认值，请在父组件中自定义该li标签即可</a>\
				</li>\
		    </slot>\
		</ul>\
	</div>',
	data:function(){
		return {
			idName: this.id,
			openClass: "",
			isOpen:false
		}
	},
	methods:{
		openMenu : function () {
			if (this.isOpen) {
				this.openClass = ''
				this.isOpen = false;
			} else{
				this.openClass = 'open'
				this.isOpen = true;
			}
			
		}
	}
});
//  ========== 
//  = jDate 插件 日期组件 = 
Vue.component('j-date',{
	props : ['id','defaulttext'],
	template: '\
	<div class="blueForm easyUtil-flexContainerRow">\
		<input type="text" class="jeinput" :name="idName" :id="idName" :placeholder="text" value="" readonly="readonly">\
		<label :for="idName"><i class="iconfont easyUtil-fBlue icon-riqi"></i></label>\
	</div>',
	data:function(){
		return {
			idName: this.id,
			text: this.defaulttext
		}
	}
});
//  ========== 