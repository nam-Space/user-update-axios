import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		axios.get('http://localhost:3001/users')
			.then((res) => {
				setUsers(res.data)
			})
	}, [])


	return (
		<div className='wrapper_users'>
			<h1>Users</h1>
			<ul>
				{users.map(user=> (
					<li key={user.id}>
						<Link to={`/user/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
			<button onClick={() => navigate('/add')}>Create</button>
		</div>
	);
}

export default Users