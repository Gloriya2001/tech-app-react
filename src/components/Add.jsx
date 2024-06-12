import React from 'react'

const Add = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2 className="text-center">Student Registration for Events</h2>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label"> Course Name</label>
                                <input type="text" className="form-control" />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="">Academic year</label>

                                <input type="text" className="form-control" />

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Batch</label>
                                <input type="text" className="form-control" />

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll Number</label>
                                <input type="text" className="form-control" />




                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" />


                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" />

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" id="" className="form-control" />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Event Name</label>
                                <select id="" className="form-control">
                                    <option value=""></option>
                                    <option value="Mock CID">Mock CID</option>
                                    <option value="Mock Recrutement">Mock Recrutement</option>
                                    <option value="Treasure Hunt">Treasure Hunt</option>
                                    <option value="Find the Error">Find the Error</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Group Name</label>
                                <select id="" className="form-control">
                                    <option value=""></option>
                                    <option value="Ruby">Ruby</option>
                                    <option value="Diamond">Diamond</option>
                                    <option value="Techiz">Techiz</option>
                                    <option value="Cryptoz">Cryptoz</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">Register</button>

                            </div>



                        </div>



                    </div>
                </div>
            </div>



        </div>
    )
}

export default Add