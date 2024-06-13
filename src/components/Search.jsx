import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {


    const [data, searchData] = useState(

        { "event": "" }

    )

    const inputHandler = (event) => {
        searchData({ ...data, [event.target.name]: event.target.value })
    }



    const [result, setResult] = useState([])

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





    return (
        <div>

<Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center">Search Students in the Event</h2>

                        <div className="row g-3">



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Event</label>
                                <select id="" className="form-control" name='event' value={data.event} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Mock CID">Mock CID</option>
                                    <option value="Mock Recrutement">Mock Recrutement</option>
                                    <option value="Treasure Hunt">Treasure Hunt</option>
                                    <option value="Find the Error">Find the Error</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Search</button>

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

export default Search