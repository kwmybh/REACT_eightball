import React, { useState } from 'react';
import './Eightball.css';

const Eightball = ({ answers }) => {
	const getRandomAnswer = () =>
		answers[Math.floor(Math.random() * answers.length)];

	const [background, setBackground] = useState('black');
	const [msg, setMsg] = useState('Think of a question');

	const updateBall = () => {
		const { msg, color } = getRandomAnswer();
		setMsg(msg);
		setBackground(color);
	};

	const reset = () => {
		setMsg('Think of a question');
		setBackground('black');
	};

	return (
		<div className="Eightball">
			<div
				onClick={updateBall}
				className="Eightball-ball"
				style={{ backgroundColor: background }}
			>
				<p className="Eightball-text">
					<b>{msg}</b>
				</p>
			</div>
			<button onClick={reset} className="Eightball-reset">
				Reset
			</button>
		</div>
	);
};

export default Eightball;
