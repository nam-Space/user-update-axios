import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import UserDetail from './components/UserDetail';
import Users from './components/Users';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Users />}/>
			<Route path='/user/:id' element={<UserDetail />} />
			<Route path='/add' element={<AddUser />} />
		</Routes>
	)
}

export default App;
