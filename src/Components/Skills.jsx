import React from 'react'
import htmlL from '../assets/html5.svg'
import cssL from '../assets/css.svg'
import jsL from '../assets/JS.svg'
import reactL from '../assets/react_logo_dark.svg'
import phpL from '../assets/PHP.svg'
import pyL from '../assets/Python.svg'
import cppL from '../assets/CPlusPlus.svg'
import djangoL from '../assets/djangoLogo.png'
import gitL from '../assets/git.png'
import jiraL from '../assets/jira.png'
import mlL from '../assets/matlab.png'
import goL from '../assets/GoBlue.png'



function Skills() {
	return (
		<div className='skillContainer' id='skill'>
			<h2 className='secTitle'>Top Skills</h2>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={pyL} alt="" className='skillIcon' title='PYTHON'/>
				</a>
				<a href="#" target="_blank">
					<img src={reactL} alt="" className='skillIcon'  title = 'ReactJS'/>
				</a>
				<a href="#" target="_blank">
					<img src={goL} alt="" className='skillIcon' title = 'GO'/>
				</a>
				<a href="#" target="_blank">
					<img src={djangoL} alt="" className='skillIcon' title = 'Django'/>
				</a>
			</div>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={htmlL} alt="" className='skillIcon' title = 'HTML'/>
				</a>
				<a href="#" target="_blank">
					<img src={cssL} alt="" className='skillIcon' title = 'CSS'/>
				</a>
				<a href="#" target="_blank">
					<img src={jsL} alt="" className='skillIcon' title = 'JavaScript'/>
				</a>
				<a href="#" target="_blank">
					<img src={cppL} alt="" className='skillIcon' title = 'C++'/>
				</a>
			</div>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={phpL} alt="" className='skillIcon' title = 'PHP'/>
				</a>
				<a href="#" target="_blank">
					<img src={gitL} alt="" className='skillIcon' title = 'Git'/>
				</a>
				<a href="#" target="_blank">
					<img src={jiraL} alt="" className='skillIcon' title = 'Jira Project Management Tool'/>
				</a>
				<a href="#" target="_blank">
					<img src={mlL} alt="" className='skillIcon' title = 'Matlab'/>
				</a>

			</div>

		</div>
	)
}

export default Skills