import { useParams } from "react-router-dom"
import axios, { Axios } from "axios"
import { useEffect, useRef, useState } from "react"
import './AppointmentDetailsView.css'
import { Form,FormControl,FormLabel, FormSelect } from "react-bootstrap";

export default function AppointmentDetailsView(){
    
    const {id} = useParams()
    const url = `http://127.0.0.1:8000/api/appointments/${id}/`


    const selectRef = useRef();

    const [error,setError] = useState({})
    const [appointment,setAppointment] = useState({})
    const [editing,setEditing] = useState(true)

    const [formData,setFormData] = useState({
        priority : appointment.priority,
        time : appointment.time,
        date : appointment.date,
        procedure : appointment.procedure
    })

    const handleFormChange = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        console.log(formData)

        try{
            await axios.put(url,formData)
        }
        catch (err){
            console.error(err)
        }
    }

    const enableEdit = () => {
        setEditing(false)
    }

    const disableEdit = () => {
        setEditing(true)
    }

    
    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setAppointment(response.data)
                const { priority, time, date, procedure, pet } = response.data;
                setFormData({ priority, time, date, procedure, pet });
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
                    <Form className="d-flex flex-column align-items-center" method="PUT" onSubmit={handleSubmit}>
                        <div className="row w-75 justify-content-evenly align-items-center">
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Priority</FormLabel>
                                <FormSelect className={editing ? "form-select" : "form-select"} name="priority" ref={selectRef} onChange={handleFormChange} disabled={editing}>
                                    <option>{appointment.priority}</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </FormSelect>
                            </div>
                            <div id="medicContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Assigned To</FormLabel>
                                <FormControl
                                    name="medic"
                                    type="text"
                                    value="Medic Name"
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                />
                            </div>
                            <div id="procedureContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Procedure</FormLabel>
                                <FormSelect ref={selectRef} name="procedure" onChange={handleFormChange} disabled={editing} className={editing ? "form-select" : "form-select"}>
                                    <option>{appointment.procedure}</option>
                                    <option value="General">General</option>
                                    <option value="Leg Surgery">Leg Surgery</option>
                                    <option value="Cleaning">Cleaning</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div className="row w-75 justify-content-evenly align-items-center">
                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Date</FormLabel>
                                <FormControl
                                    name="date"
                                    type="date"
                                    value={appointment.date}
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div id="priorityContainer" className="col d-flex flex-column align-items-center">
                                <FormLabel className="textHiglight fs-5">Time</FormLabel>
                                <FormControl
                                    name="time"
                                    type="time"
                                    value={appointment.time}
                                    disabled={editing}
                                    className={editing ? "form-control" : "form-control"}
                                    onChange={handleFormChange}
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

                        <div className="row w-75 justify-content-center align-items-center">
                            {!editing && (
                                <button type="submit" className="btn btn-success w-25 btn-lg mt-4">Send</button>
                            )}
                        </div>
                    </Form>
                    
                </div>
            </div>
        </div>
        
    )
}