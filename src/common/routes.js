import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Friends } from '../components/Friends/Friends';
import { Contact } from '../components/Contact/Contact';

const routes = [
	{
		name: 'Home',
		component: <Home />,
		path: '/',
	},
	{
		name: 'About',
		component: <About />,
		path: '/about',
	},
	{
		name: 'Friends',
		component: <Friends />,
		path: '/friends',
	},
	{
		name: 'Contact',
		component: <Contact />,
		path: '/contact',
	},
];

export default routes;
