import React from 'react';
import './todoItem.scss';
import todo from '../../store/todo';

type ITodoItem = {
  title: string;
  completed: boolean;
  id: string;
};

const TodoItem = ({ title, id, completed }: ITodoItem) => {
	function deleteItem() {
		todo.removeTodo(id);
	}
	function toggleComplete() {
		todo.completeTodo(id);
	}
	return (
		<div className="todo-item" onClick={toggleComplete}>
			{completed ? (
				<div style={{ textDecoration: 'line-through', color: 'green' }}>{title}</div>
			) : (
				<div> {title}</div>
			)}
			<span className="todo-item__delete-button" onClick={deleteItem}>
        X
			</span>
		</div>
	);
};

export default TodoItem;
