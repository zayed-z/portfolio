import React from 'react'
import zayedPic from '../assets/zayedPic2.png'

function Home() {
	return (
		<div className='homeContainer' id='home'>
			<img src={zayedPic} alt="zayed" className='displayPic' />
			<h2 className='myName'>Md. Zayed Al Masud</h2>
			<p className='aboutTxt'>
				I am a recent graduate with a degree in Electrical & Computer Engineering (ECE) willing to use my technical skills
				to develop the best performance in a company. I prefer to immerse myself in challenging projects &
				difficulties and I am always willing to learn something new.
			</p>
			<div className='myBtn'>

				<a href="https://drive.google.com/file/d/1bQyKfo_FpY2M3qINRX6KxZWgVTUinZKM/view?usp=drive_link" target='_blank'><button className='Btn'>My RESUME</button></a>
				<a href="https://github.com/zayed-z" target='_blank'><button className='Btn'>My GITHUB</button></a>


			</div>
		</div>
	)
}

export default Home