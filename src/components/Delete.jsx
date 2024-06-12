import React, { useState } from 'react'

const Delete = () => {

const [data,setData] = useState(
{
    "name":""
}
)


const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})
}

const readValue = () => {
    console.log(data)
}


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center">Search Student To delete</h2>


                        <div className="row g-3">


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-Delete" onClick={readValue}>Delete</button>

                            </div>

                        </div>




                    </div>
                </div>
            </div>


        </div>
    )
}

export default Delete