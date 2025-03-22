import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const Styles = styled.div`
	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #ffffff;
		font-weight: 700;

		&:hover {
			color: #fff;
		}
	}

`

export default function Navibar() {
	return (
		<>
			<Styles>
				<Navbar style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.089)', boxShadow: '0px 3px 5px rgba(255, 255, 255, 0.089)' }}  collapseOnSelect expand='lg' bg='#181818' data-bs-theme='dark'>
					<Container>
						<Navbar.Brand className='ms-2'>
							Learn Frontend
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='ms-auto'>
								<Nav.Link as={Link} to='/'>
									JavaScript
								</Nav.Link>
								<Nav.Link as={Link} to='/Introduction'>
									Galery
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<div className='main-content'></div>
			</Styles>
		</>
	)
}
