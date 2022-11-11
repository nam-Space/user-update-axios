import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then((res) => {
				setUsers(res.data)
			})
	}, [])

	return (
		<div className="App">
			<h1>Users</h1>
			<ul>
				{users.map(user=> (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
