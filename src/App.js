import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarIcon from './components/SidebarIcon';
import { FaTwitter, FaSun, FaMoon, FaGithub, FaUserAstronaut, FaRoute, FaSatelliteDish, FaLinkedin } from 'react-icons/fa';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Stars from './components/Stars';

const GITHUB = 'https://github.com/carllapierre'
const TWITTER = 'https://twitter.com/0xWhiskyy'
const LINKEDIN = 'https://www.linkedin.com/in/carllapierre/'

function App() {

	const [theme, setTheme] = useState('dark');
	const handleThemeChange = (newTheme) => {
		if (newTheme !== theme) setTheme(newTheme)
	}

  	return (
		<div className={theme}>
			<div className="to-sky-100 from-sky-300 duration-700 dark:from-[#161b24] dark:to-[#1b1327] h-screen bg-gradient-to-b">
				{theme  === 'dark' ? <Stars/> : <></>}
				<Sidebar >
					<SidebarIcon text='About' icon={<FaUserAstronaut size={20}/>} />
					<SidebarIcon text='Experience' icon={<FaRoute size={20} />} />
					<SidebarIcon text='Contact' icon={<FaSatelliteDish size={20} />} />
					<Divider/>
					<SidebarIcon text='LinkedIn' onClick={()=> window.open(LINKEDIN)} icon={<FaLinkedin size={20} />} />
					<SidebarIcon text='Twitter' onClick={()=> window.open(TWITTER)} icon={<FaTwitter size={20} />} />
					<SidebarIcon text='Github' onClick={()=> window.open(GITHUB)} icon={<FaGithub size={20} />} />
					<Divider/>
					<SidebarIcon text='Day' onClick={() => handleThemeChange('light')} selected={theme === 'light'} icon={<FaSun size={20} />} />
					<SidebarIcon text='Night' onClick={() => handleThemeChange('dark')} selected={theme === 'dark'} icon={<FaMoon size={20} />} />
				</Sidebar>
				<Footer/>
			</div>
		</div>
  );
}

export default App;
