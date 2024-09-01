import React from 'react'
import home from '../assets/home.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import linkedIn from '../assets/linkedIn.svg'


function Contact() {
	const currentYear = new Date().getFullYear();
	return (
		<div className='contactContainer' id='contact'>
			<h2 className='secTitle'>Contact Me</h2>
			<div className='contactBox'>
				<div className='contactCard'>
					<img src={home} alt="" className='contactIcon' />
					<p>Rajshahi, Bangladesh</p>
				</div>
				<div className='contactCard'>
					<img src={phone} alt="" className='contactIcon' />
					<p>+88 01316-566-817</p>
					<p>+88 01776-971-588</p>
				</div>
				<div className='contactCard'>
					<img src={email} alt="" className='contactIcon' />
					<p>zayedmasud3802@gmail.com</p>
				</div>
				<div className='contactCard'>
					<img src={linkedIn} alt="" className='contactIcon' />
					<a href="https://www.linkedin.com/in/zayed-al-masud" target='_blank'><p>zayed-al-masud</p></a>
				</div>

			</div>
			<div className='footer'>
				<p>Copyright &copy; {currentYear}. All rights are reserved by <strong>Md Zayed Al Masud</strong></p>
				<p>Designed by <strong>Zayed</strong></p>
			</div>
		</div>
	)
}

export default Contact