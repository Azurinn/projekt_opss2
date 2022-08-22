import './Header.css';
import { NavLink } from 'react-router-dom';
import routes from '../../common/routes';

const checkIsActive = ({ isActive }) => {
	return isActive ? 'navLink active' : 'navLink';
};

const Header = () => {
	return (
		<header className="header">
			<ul className="menu">
				{routes.map(route => (
					<li key={`route+${route.path}`}>
						<NavLink className={checkIsActive} to={route.path}>
							{route.name}
						</NavLink>
					</li>
				))}
			</ul>
		</header>
	);
};

export { Header };
