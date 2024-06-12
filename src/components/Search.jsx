import React, { useState } from 'react'

const Search = () => {


const [data,searchData] = useState(

   {"event":""} 

)

const inputHandler = (event) => {
searchData({...data,[event.target.name]:event.target.value})
}

const readValue = () =>{
    console.log(data)
}


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2>Search Students in the Event</h2>

                        <div className="row g-3">



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Event</label>
                                <input type="text" className="form-control" name='event' value={data.event} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Search</button>

                            </div>


                        </div>





                    </div>
                </div>
            </div>


        </div>
    )
}

export default Search