import Vue from 'vue/dist/vue.esm'

var app = new Vue({
	el: '#editor',
	data: {
		input: '## hello'
	},
	computed: {
		compiledMarkDown: function(){
			return marked(this.input, {sanitize: true});
		}
	},
	methods: {
		update: function(eventObject){
			this.input = eventObject.target.value;
		}
	}
});