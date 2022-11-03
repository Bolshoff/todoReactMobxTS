import React, { ChangeEvent, useState } from 'react';
import './formInput.scss';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import { v4 as uuid } from 'uuid';

const FormInput = () => {
	const [inputValue, setInputValue] = useState('');

	const todoItem = {
		id: uuid(),
		title: inputValue,
		completed: false,
	};

	return (
		<form
			className="input-form"
			onSubmit={(e: React.SyntheticEvent) => {
				e.preventDefault();
				todo.addTodo(todoItem);
				setInputValue('');
			}}
		>
			<input
				type="text"
				className="input-form__input"
				value={inputValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setInputValue(e.target.value);
				}}
			/>
			<input type="submit" className="input-form__submit-button" />
		</form>
	);
};

export default observer(FormInput);
