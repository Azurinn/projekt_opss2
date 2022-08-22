import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import routes from '../../common/routes';
import { FriendPage } from '../../components/FriendPage/FriendPage';

function Main() {
	return (
		<main className="main">
			<Routes>
				{routes.map(route => (
					<Route key={route.name} path={route.path} element={route.component} />
				))}
				<Route path="friends/:friendId" element={<FriendPage />} />
			</Routes>
		</main>
	);
}

export { Main };
