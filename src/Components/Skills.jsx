import React from 'react'
import htmlL from '../assets/html5.svg'
import cssL from '../assets/css.svg'
import jsL from '../assets/JS.svg'
import reactL from '../assets/react_logo_dark.svg'
import phpL from '../assets/PHP.svg'
import pyL from '../assets/Python.svg'
import cppL from '../assets/CPlusPlus.svg'
import cL from '../assets/c.svg'
import gitL from '../assets/git.png'
import jiraL from '../assets/jira.png'
import mlL from '../assets/matlab.png'



function Skills() {
	return (
		<div className='skillContainer' id='skill'>
			<h2 className='secTitle'>Top Skills</h2>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={htmlL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={cssL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={jsL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={reactL} alt="" className='skillIcon'/>
				</a>
			</div>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={pyL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={cppL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={cL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={phpL} alt="" className='skillIcon'/>
				</a>
			</div>
			<div className='skillShowcase'>
				<a href="#" target="_blank">
					<img src={gitL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={jiraL} alt="" className='skillIcon'/>
				</a>
				<a href="#" target="_blank">
					<img src={mlL} alt="" className='skillIcon'/>
				</a>

			</div>

		</div>
	)
}

export default Skills