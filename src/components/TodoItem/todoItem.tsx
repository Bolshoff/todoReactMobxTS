import React from 'react';
import './todoItem.scss';
import todo from '../../store/todo';

type ITodoItem = {
  title: string;
  completed: boolean;
  id: string;
};

const TodoItem = ({ title, id }: ITodoItem) => {
	function deleteItem() {
		todo.removeTodo(id);
	}
	return (
		<div className="todo-item">
			{title}
			<span className="todo-item__delete-button" onClick={deleteItem}>
        X
			</span>
		</div>
	);
};

export default TodoItem;
