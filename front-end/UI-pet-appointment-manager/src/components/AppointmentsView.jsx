import { useEffect } from "react";
import axios from 'axios'

export default function AppointmentView(){
    const url = 'http://127.0.0.1:8000/api/appointments/'
    useEffect(()=>{
        axios.get(url)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.warn(err)
            })
    })

    return(
        <>
            <h1>AppointmentsView</h1>
        </>
    )
}