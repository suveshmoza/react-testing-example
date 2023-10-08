import { useState, useEffect } from 'react';

type UserData = {
	name: string;
	email: string;
	phone: string;
};

function UserProfile() {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		fetch(
			'https://jsonplaceholder.typicode.com/users/' +
				Math.floor(Math.random() * 10)
		)
			.then((response) => response.json())
			.then((data: UserData) => setUserData(data))
			.catch((error) => console.error('Error fetching user data:', error));
	}, []);

	return (
		<div>
			<h1>User Profile</h1>
			{userData ? (
				<div>
					<p>Name: {userData.name}</p>
					<p>Email: {userData.email}</p>
					<p>Phone: {userData.phone}</p>
				</div>
			) : (
				<p>Loading user data...</p>
			)}
		</div>
	);
}

export default UserProfile;
