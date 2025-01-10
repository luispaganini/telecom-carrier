import { Container, Navbar } from 'react-bootstrap'
import { TelephoneForwardFill } from 'react-bootstrap-icons'

export default function NavbarComponent() {
  return (
    <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">
            <div className='flex items-center'>
              <TelephoneForwardFill className="mr-2" />
              <span className='text-base font-semibold'>Telecom Carrier</span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
