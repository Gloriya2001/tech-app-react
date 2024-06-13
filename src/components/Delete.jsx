import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {

    const [data, setData] = useState(
        {
            "name": ""
        }
        
    )

    const [result, setResult] = useState([])


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(

            (response) => {
                setResult(response.data)
            }


        ).catch(

            (error) => {
                console.log(error.message)
                alert("error occured")
            }
        )
    }

    const deletesample = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(

            (response) => {

                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Deleted")

                } else {
                    alert("Error!")
                }

            }

        ).catch()
    }



    return (
        <div>


<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center">Search Student To delete</h2>


                        <div className="row g-3">


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                                <button className="btn btn-danger" onClick={readValue}>Delete</button>



                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table table stripped">

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


                                        {result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th>{index + 1}</th>
                                                    <td>{value.name}</td>
                                                    <td>{value.course}</td>
                                                    <td>{value.event}</td>
                                                    <td>{value.gpname}</td>
                                                    <td> <button className="btn btn-danger" onClick={()=>{ deletesample(value._id) }}>Delete</button></td>
                                                </tr>
                                            }
                                        )}


                                    </tbody>


                                </table>

                            </div>


                        </div>




                    </div>
                </div>
            </div>


        </div>
    )
}

export default Delete