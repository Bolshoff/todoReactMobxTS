import React, { useState } from 'react';
import './todoList.scss';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import FormInput from '../FormInput/formInput';
import TodoItem from '../TodoItem/todoItem';

const TodoList = () => {
	const FILTER_VALUES = {
		ALL: 'All',
		COMPLETED: 'Completed',
		UNCOMPLETED: 'Uncompleted',
	};

	const [filter, setFilter] = useState(FILTER_VALUES.ALL);

	let completedTodo: boolean;
	let uncompletedTodo: boolean;

	function setAllFilter() {
		setFilter(FILTER_VALUES.ALL);
	}
	function setCompletedFilter() {
		setFilter(FILTER_VALUES.COMPLETED);
	}
	function setUncompletedFilter() {
		setFilter(FILTER_VALUES.UNCOMPLETED);
	}

	if (filter === FILTER_VALUES.COMPLETED) {
		completedTodo = true;
	}
	if (filter === FILTER_VALUES.UNCOMPLETED) {
		uncompletedTodo = true;
	}

	return (
		<div className="todolist">
			<p className="todolist__header">ToDo </p>
			<FormInput />

			<label className="todolist__filter-input-label">
        Все
				<input
					className="todolist__filter-input"
					type="radio"
					value="all"
					name="filter"
					onChange={setAllFilter}
				/>
			</label>
			<label className="todolist__filter-input-label">
        Завершенные
				<input
					className="todolist__filter-input"
					type="radio"
					value="completed"
					name="filter"
					onChange={setCompletedFilter}
				/>
			</label>
			<label className="todolist__filter-input-label">
        Незавершенные
				<input
					className="todolist__filter-input"
					type="radio"
					value="uncompleted"
					name="filter"
					onChange={setUncompletedFilter}
				/>
			</label>
			<div className="todolist__todo-wrapper">
				{completedTodo
					? todo.finishedTodos.map((item) => (
						<TodoItem key={item.id} title={item.title} completed={item.completed} id={item.id} />
					))
					: uncompletedTodo
						? todo.unfinishedTodos.map((item) => (
							<TodoItem key={item.id} title={item.title} completed={item.completed} id={item.id} />
						))
						: todo.todos.map((item) => (
							<TodoItem key={item.id} title={item.title} completed={item.completed} id={item.id} />
						))}
			</div>
		</div>
	);
};

export default observer(TodoList);
