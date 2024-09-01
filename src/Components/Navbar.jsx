import React, { useState, useEffect } from "react";

function Navbar() {
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleScroll = () => {
		if (window.scrollY > lastScrollY) {
			// Scroll down
			setVisible(false);
		} else {
			// Scroll up
			setVisible(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<nav className={`navbar ${visible ? "visible" : "hidden"}`} >
			<ul className='navList'>
				<li className='navItems'><a href="#home">HOME</a></li>
				<li className='navItems'><a href="#edu">EDUCATION</a></li>
				<li className='navItems'><a href="#skill">SKILLS</a></li>
				<li className='navItems'><a href="#pro">PROJECTS</a></li>
				<li className='navItems'><a href="#contact">CONTACT</a></li>
			</ul>
		</nav>
	)
}

export default Navbar