//  ========== 
//  = Vue 组件 by qy = 
//  ========== 
//  = 下拉框 = 
Vue.component('selected',{
	props : ['id','text'],
	template: '\
	<div :id="idName" class="dropdown blueForm easyUtil-toRight">\
		<button type="button" class="dropdown-toggle" data-toggle="dropdown">\
			<span class="">{{text}}</span>\
			<i class="easyUtil-fBlue iconfont icon-xiala selectIcon"></i>\
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
		}
	}
});
//  ========== 