import { useParams } from "react-router-dom"
import axios, { Axios } from "axios"
import { useEffect, useRef, useState } from "react"
import './AppointmentDetailsView.css'
import { Form,FormControl,FormLabel, FormSelect } from "react-bootstrap";

export default function AppointmentDetailsView(){
    const {id} = useParams()
    const selectRef = useRef();

    const [error,setError] = useState({})
    const [appointment,setAppointment] = useState({})
    const [editing,setEditing] = useState(true)

    const handleChange = (e) => {
        console.log(e.target.value);
        // Quitar el focus
        selectRef.current.blur();
    };

    const enableEdit = () => {
        setEditing(false)
    }

    const disableEdit = () => {
        setEditing(true)
    }

    const url = `http://127.0.0.1:8000/api/appointments/${id}`
    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setAppointment(response.data)
            })
            .catch(err => {
                setError(err)
            })
    },[])

    return (
        <div className="container mainContainer">
            <div className="row bannerContainer overflow-hidden">
                <div className="col w-100 p-0 z-0 overflow-hidden rounded-3">
                    <img className="w-100 img-fluid banner-img" alt="banner" src="/VeterinaryBanner.jpg"/>
                </div>
            </div>
            <div className="row infoContainer rounded-bottom-3 p-4">
                <div className="col z-1 d-flex flex-column border-2">
                    <div className="d-flex justify-content-center mb-4">
                        <h2 id="Title">Appointment Details</h2>
                    </div>
                    <div className="d-flex justify-content-center mb-4 w-25 align-self-center">
                        <button onClick={enableEdit} className="btn btn-primary w-25 me-2">Edit</button>
                        {!editing && (
                            <button onClick={disableEdit} className="btn btn-danger w-25">Cancel</button>
                        )}
                    </div>
                    <Form className="d-flex flex-column align-items-center">
                        <div className="row w-75 justify-content-evenly align-items-center">
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Priority</FormLabel>
                                <FormSelect className={editing ? "form-select" : "form-select"} ref={selectRef} onChange={handleChange} disabled={editing}>
                                    <option>{appointment.priority}</option>
                                    <option value="1">low</option>
                                    <option value="2">medium</option>
                                    <option value="3">high</option>
                                </FormSelect>
                            </div>
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Assigned To</FormLabel>
                                <FormControl
                                    type="text"
                                    value="Medic Name"
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                />
                            </div>
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Procedure</FormLabel>
                                <FormSelect ref={selectRef} onChange={handleChange} disabled={editing} className={editing ? "form-select" : "form-select"}>
                                    <option>{appointment.procedure}</option>
                                    <option value="1">General</option>
                                    <option value="2">Leg Surgery</option>
                                    <option value="3">Cleaning</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div className="row w-75 justify-content-evenly align-items-center">
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Date</FormLabel>
                                <FormControl
                                    type="date"
                                    value={appointment.date}
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                />
                            </div>

                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Time</FormLabel>
                                <FormControl
                                    type="time"
                                    value={appointment.time}
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                />
                            </div>

                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Pet</FormLabel>
                                <FormControl
                                    type="text"
                                    value={appointment.pet?.name}
                                    disabled="true"
                                    />
                            </div>
                            <a id="moreInfoPet" className="ms-3 position-absolute" href="#">Pet Details...</a>
                        </div>
                        
                    </Form>
                    
                </div>
            </div>
        </div>
        
    )
}