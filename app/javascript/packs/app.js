// html を操作する場合は、vue ではなくて
// vue/dist/vue.esm を　import する必要がある
import Vue from 'vue/dist/vue.esm'

var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: []
	},
	methods: {
		addTodo: function(){
			var newTodo = this.todoText.trim();
			if (!newTodo){
				return;
			}
			this.todos.push(
					{text: newTodo, done: false}
				);
			this.todoText = '';
		},
		archive: function(){
			var remains = [];
			for (var i = 0; i < this.todos.length; i++){
				var todo = this.todos[i];
				if (!todo.done) {
					remains.push(todo);
				}
			}
			this.todos = remains;
		},
		removeTodo: function(todo){
			// 削除するTodoを検索
			var index = this.todos.indexOf(todo)
			// 配列.splice(要素の抽出位置, 抽出個数)
			this.todos.splice(index, 1)
		}
	},
	//データが変わったときにだけ実行される
	computed: {
		remaining: function(){
			var count = 0;
			for (var i = 0; i < this.todos.length; i++){
				if (!this.todos[i].done) {
					count ++;
				}
			}
			return count;
		}
	}
});