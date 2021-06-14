import EightBall from './EightBall';
import answersData from './answers';
import './App.css';

const App = () => {
	return (
		<>
			<EightBall answers={answersData} />
		</>
	);
};

export default App;
