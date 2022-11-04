import { makeAutoObservable } from 'mobx';

export interface ITodos {
  completed: boolean;
  id: string;
  title: string;
}

class Todo {
	todos: ITodos[] | undefined = [];
	constructor() {
		makeAutoObservable(this);
	}

	addTodo(todo: { id: string; completed: boolean; title: string }) {
		if (this.todos) {
			this.todos.push(todo);
		}
	}

	removeTodo(id: string) {
		if (this.todos) {
			this.todos = this.todos.filter((todo) => todo.id !== id);
		}
	}

	completeTodo(id: string) {
		if (this.todos) {
			this.todos = this.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			);
		}
	}
}

export default new Todo();
