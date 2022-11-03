import React from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import FormInput from '../FormInput/formInput';
import TodoItem from '../TodoItem/todoItem';

const TodoList = () => {
	return (
		<div className="todolist">
			<FormInput />
			{todo.todos.map((item) => (
				<TodoItem
					key={item.id}
					title={item.title}
					completed={item.completed}
					id={item.id}
				/>
			))}
		</div>
	);
};

export default observer(TodoList);
