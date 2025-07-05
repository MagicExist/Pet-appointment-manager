import Dropdown from 'react-bootstrap/Dropdown';
import './AppointmentDropDownBtn.css'
import { Link } from 'react-router-dom';

export default function AppointmentDropDownBtn({appointmentId}){
    return (
        <Dropdown
            key={'start'}
            drop='start'
            className='option-btn'
        >
            <Dropdown.Toggle variant="link" id="dropdown-custom-toggle">
                <img src="/appointmentOptions.svg" alt="menu" style={{ width: '30px' }} />
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/appointment/details/${appointmentId}`} id='Details' eventKey="1">Details</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item id='Delete' eventKey="2">Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}