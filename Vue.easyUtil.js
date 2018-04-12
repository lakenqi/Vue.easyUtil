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
	<div :id="idName" class="dropdown easyUtil-blueForm" v-outsideclose="closeMenu" @click="openMenu()" :class="openClass">\
		<button type="button" class="dropdown-toggle easyUtil-flexContainerRow" data-toggle="dropdown">\
			<span class="">{{text}}</span>\
			<i class="easyUtil-fBlue downarray"></i>\
		</button>\
		<ul class="dropdown-menu dropdown-menu-right menu-list">\
			<slot>\
				<li>\
					<a class="" val=""></a>\
				</li>\
		    </slot>\
		</ul>\
	</div>',
	data:function(){
		return {
			idName: this.id,
			openClass: null,
		}
	},
	methods:{
		openMenu : function () {
			if (this.openClass) {
				this.openClass = null
			} else{
				this.openClass = 'open'
			}
		},
		closeMenu:function () {
			this.openClass = null
		}
	}
});
//  ========== 
//  ========== 
//  = 自定义外部点击关闭指令 = 
Vue.directive('outsideclose',{
	bind: function (el,binding,vnode) {
		function handleClick(e){
			if (el.contains(e.target)) {
				return false;
			}
			if (binding.expression) {
				binding.value(e);
			}
		}
		el._outSideClose = handleClick;
		document.addEventListener('click',handleClick);
	},
	unbind: function (el,binding) {
		document.removeEventListener('click',el._outSideClose);
		delete el._outSideClose;
	}
});
//  ========== 



//  = jDate 插件 日期组件 = 
Vue.component('j-date',{
	props : ['id','defaulttext'],
	template: '\
	<div class="easyUtil-blueForm easyUtil-flexContainerRow">\
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