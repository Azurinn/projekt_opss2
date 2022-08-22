import './Friends.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Friends() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch('https://random-data-api.com/api/v2/users?size=6')
			.then(resp => resp.json())
			.then(resp => setFriends(resp))
			.catch(err => console.warn(err));
	}, []);

	return (
		<div>
			<h1>My Friends</h1>
			<div className="friends">
				{!friends.length && <h2>Loading...</h2>}
				{friends.map(friend => (
					<div key={friend.id} className="friend">
						<img
							src={friend.avatar}
							alt={friend.first_name}
							draggable={false}
						/>
						<p>Name: {friend.first_name}</p>
						<p>Title: {friend.employment.title}</p>
						<Link
							className="moreInfoButton"
							to={`/friends/${friend.first_name}`}
							state={{ data: friend }}
						>
							Click for more info
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export { Friends };
