import Dropdown from 'react-bootstrap/Dropdown';
import './AppointmentDropDownBtn.css'

export default function AppointmentDropDownBtn(){
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
                <Dropdown.Item id='Details' eventKey="1">Details</Dropdown.Item>
                <Dropdown.Item id='Edit' eventKey="2">Edit</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item id='Delete' eventKey="4">Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}