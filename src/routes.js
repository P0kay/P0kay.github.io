import User from './Icons/User'
import Folder from './Icons/Folder';
import AboutMe from './about_me';
import Projects from './projects';

const routes = [
    {
        name: 'ABOUT ME',
        path: '/about_me',
        icon: <User size={80} color='#E5E7EB' />,
    },
    {
        name: 'MY PROJECTS',
        path: '/projects',
        icon: <Folder size={80} color='#E5E7EB' />
    }
]
export default routes