//  ========== 
//  = Vue 组件 by qy = 
//  ========== 
//  = 下拉框 = 
Vue.component('selected',{
	props : ['id','text'],
	template: '\
	<div :id="idName" class="dropdown blueForm easyUtil-toRight">\
		<button type="button" class="dropdown-toggle easyUtil-flexContainerRow" data-toggle="dropdown">\
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