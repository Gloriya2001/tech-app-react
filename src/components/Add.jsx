import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

const [data,setData] = useState(
    {
        "name":"",
        "course":"",
        "year":"",
        "batch":"",
        "rollNo":"",
        "admNo":"",
        "mob":"",
        "dob":"",
        "event":"",
        "gpname":""

    }
)

const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})
}

const readValue = () => {
   console.log(data)
    
   axios.post("http://localhost:8080/add",data).then(

    (response) => {

        if (response.data.status == "sucess") {

            alert("Successfully Added")
            
        } else {
            alert("Error!!")
        }
    }


   ).catch(
(error) => {
    console.log(error.message)
}

   )



}
 



    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2 className="text-center">Student Registration for Events</h2>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label"> Course Name</label>
                                <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="">Academic year</label>

                                <input type="text" className="form-control" name='year' value={data.year} onChange={inputHandler}/>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Batch</label>
                                <input type="text" className="form-control" name='batch' value={data.batch} onChange={inputHandler}/>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll Number</label>
                                <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler}/>




                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler} />


                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler}/>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Event Name</label>
                                <select id="" className="form-control" name='event' value={data.event} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Mock CID">Mock CID</option>
                                    <option value="Mock Recrutement">Mock Recrutement</option>
                                    <option value="Treasure Hunt">Treasure Hunt</option>
                                    <option value="Find the Error">Find the Error</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Group Name</label>
                                <select id="" className="form-control" name='gpname' value={data.gpname} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Ruby">Ruby</option>
                                    <option value="Diamond">Diamond</option>
                                    <option value="Techiz">Techiz</option>
                                    <option value="Cryptoz">Cryptoz</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>Register</button>

                            </div>



                        </div>



                    </div>
                </div>
            </div>



        </div>
    )
}

export default Add