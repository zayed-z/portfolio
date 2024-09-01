import React from 'react'
import ruetLogo from '../assets/ruetLogo.png'
import jgcLogo from '../assets/jgcLogo.png'
import rbLogo from '../assets/rbLogo.png'

function Education() {
  return (
	<div className='eduContainer' id='edu'>
		<h2 className='secTitle'>EDUCATION</h2>
		<div className='eduCard'>
			<img src={ruetLogo} alt="Ruet Logo" className='institutePic'/>
			<div className='eduInfo'>
				<h2>Rajshahi Univerisity of Engineering & Technology(RUET)</h2>
				<p className='eduTimeline'>February 2019 - May 2024</p>
				<p className='degree'>Bachelor of Science in Electrical & Computer Engineering(ECE)</p>
				<p className='degree'>First Class</p>
			</div>
		</div>
		<div className='eduCard'>
			<img src={jgcLogo} alt="JGC Logo" className='institutePic'/>
			<div className='eduInfo'>
				<h2>Joypurhat Govt. College, Joypurhat</h2>
				<p className='eduTimeline'>HSC - 2018</p>
				<p className='degree'>Higher Secondary Certificate - Science Division</p>
				<p className='degree'>Grade: 5.00 out of 5.00</p>
			</div>
		</div>
		<div className='eduCard'>
			<img src={rbLogo} alt="RB Logo" className='institutePic'/>
			<div className='eduInfo'>
				<h2>Ramdeo Bazla Govt. High School, Joyputhat</h2>
				<p className='eduTimeline'>SSC - 2016</p>
				<p className='degree'>Secondary School Certificate - Science Division</p>
				<p className='degree'>Grade: 5.00 out of 5.00</p>
			</div>
		</div>
	</div>
  )
}

export default Education