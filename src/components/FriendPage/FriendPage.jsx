import { useLocation } from 'react-router-dom';
import './FriendPage.css';

function FriendPage() {
	const location = useLocation();
	const friendData = location.state?.data;

	return (
		<div>
			<img
				src={friendData.avatar}
				alt={friendData.first_name}
				draggable={false}
			/>
			<h1>
				{friendData.first_name} {friendData.last_name}
			</h1>
			<p>
				<strong>Email:</strong> {friendData.email}
			</p>
			<p>
				<strong>Birth date:</strong> {friendData.date_of_birth}
			</p>
			<p>
				<strong>Gender </strong>
				{friendData.gender}
			</p>
			<h2>Job:</h2>
			<p>
				<strong>Title:</strong> {friendData.employment.title}
			</p>
			<p>
				<strong>Skill:</strong> {friendData.employment.key_skill}
			</p>
		</div>
	);
}

export { FriendPage };
