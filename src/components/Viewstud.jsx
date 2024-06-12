import React, { useState } from 'react'

const Viewstud = () => {

const [data,changeData] = useState(


    [
        {
            "_id": "6669e84bcb6ca09ad2bea79b",
            "name": "Den",
            "course": "MCA",
            "year": "1",
            "batch": "A",
            "rollNo": "17",
            "admNo": "1234",
            "mob": "9878967564",
            "dob": "09-08-2001",
            "event": "mock cid",
            "gpname": "Ruby",
            "__v": 0
        },
        {
            "_id": "6669ed9ab1580fea68605dd2",
            "name": "vyvin",
            "course": "MCA",
            "year": "2",
            "batch": "B",
            "rollNo": "55",
            "admNo": "5467",
            "mob": "9878990564",
            "dob": "11-08-2000",
            "event": "mock cid",
            "gpname": "diamond",
            "__v": 0
        },
        {
            "_id": "666a05e7e2da20cc4cd2e6e6",
            "name": "GLORIYA JOHNSON",
            "course": "MCA",
            "year": "2023-25",
            "batch": "A",
            "rollNo": "55",
            "admNo": "101",
            "mob": "7689564355",
            "dob": "2001-11-09",
            "event": "Mock Recrutement",
            "gpname": "Cryptoz",
            "__v": 0
        }
    ]
)



    return (
        <div>

            <div className="container">
                <div className="row">
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