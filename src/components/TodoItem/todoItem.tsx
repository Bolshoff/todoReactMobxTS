import React from 'react';
import './todoItem.scss';
import todo from '../../store/todo';
import delLogo from '../../img/del.png';

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
				<div style={{ textDecoration: 'line-through', color: 'green' }}>
					<div className="todo-item__text">{title}</div>
				</div>
			) : (
				<div>
					<div className="todo-item__text">{title}</div>
				</div>
			)}
			<span className="todo-item__delete-button" onClick={deleteItem}>
				<img src={delLogo} style={{ width: 23, height: 23 }} />
			</span>
		</div>
	);
};

export default TodoItem;
