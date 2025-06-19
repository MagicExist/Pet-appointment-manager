import './NavBar.css'
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBarView(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="link" onClick={handleShow} className='btn-menu'>
                <img className='img-fluid' src="/menu.svg" alt="Close"/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static" className="my-offcanvas">
                <Offcanvas.Header className='d-flex justify-content-between align-content-center'>
                    <Offcanvas.Title className='my-offcanvas-title'>Pet Appointment Manager</Offcanvas.Title>
                    <Button  variant='link' onClick={handleClose} className='my-btn-close border-0'>
                        <img className='img-fluid' src="/canvasCloseBtn.svg" alt="Close"/>
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to={"/"} className='my-offcanvas-link fs-4'>Appointments</Nav.Link>
                        <Nav.Link href="#" className='my-offcanvas-link fs-4'>Pets</Nav.Link>
                        <Nav.Link href="#" className='my-offcanvas-link fs-4'>Settings</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}