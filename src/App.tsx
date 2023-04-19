import { useCallback, useMemo, useState } from 'react';
import './App.css';
import List from './components/List';
import usersBirthdayList from './data/getUsersBirthday';

function App() {
	const [birthdayList, setBirthdayList] = useState(usersBirthdayList);
	const numBirthdays = birthdayList.length;

	const qtdOfBirthdays = useMemo(() => {
		const plural = numBirthdays !== 1 ? 's' : '';
		return `${numBirthdays} aniversário${plural} hoje!`;
	}, [birthdayList.length]);

	const clearList = useCallback(() => {
		setBirthdayList([]);
	}, []);

	const fetchList = useCallback(() => {
		setBirthdayList(usersBirthdayList);
	}, []);

	return (
		<main className="App">
			<section className="container">
				<h3>Luan Victor</h3>
				<h3>{qtdOfBirthdays}</h3>
				<List birthdayList={birthdayList} />
				{numBirthdays > 0 ? (
					<button onClick={() => clearList()}>Limpar</button>
				) : (
					<button onClick={() => fetchList()}>Busque algum agora!</button>
				)}
			</section>
		</main>
	);
}

export default App;
