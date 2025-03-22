import { Col, Container, Row } from 'react-bootstrap'
import FooterPanel from './components/Footer'
import Slider from './components/Sleders/Slider'
import './Home.css'
import FillExample from './components/FillExample.jsx'


export default function Home() {

	return (
		<div className='home-main'>
				<Container className='content'>
					<Row className='w-100'>
						<Col className='mt-5' md={5}>
							<h1 className='text-light fs-3'>Современный учебник JavaScript</h1>
							<p className='text-light mt-3 fs-5'>
								Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.
							</p>
							<h2 className='text-light mt-5 fs-5'>Содержание</h2>
							<p className='text-light fs-5'>Первые две части посвящены JavaScript и его использованию в браузере. Затем идут дополнительные циклы статей на разные темы.</p>
						</Col>
					</Row>
				</Container>

		<h1 style={{ margin: '2rem 8rem', fontSize: '2rem', fontFamily: 'monospace', fontWeight: 'bold'}} className='text-light '>Темы:</h1>

				<Container>
					<Slider />
				</Container>
			
			<FooterPanel />
		</div>
	)
}