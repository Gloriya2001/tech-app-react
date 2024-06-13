import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewstud = () => {

const [data,changeData] = useState([])

const fetchData = () => {

axios.post("http://localhost:8080/view").then(

(response) => {
    changeData(response.data)}


).catch(

    (error) => {
        alert(error.message)
    }

)


}

useEffect(()=>{fetchData()},[])


    return (
        <div>


            <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center">View Details</h2>
                        <table class="table table-striped">

                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">course</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">group</th>
                                </tr>
                            </thead>


                            <tbody>


                               {data.map(
                                (value,index) => {
                                    return <tr>
                                    <th>{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.course}</td>
                                    <td>{value.event}</td>
                                    <td>{value.gpname}</td>
                                </tr>
                                }
                               )} 
                               
                                
                            </tbody>


                        </table>





                    </div>
                </div>
            </div>






        </div>
    )
}

export default Viewstud