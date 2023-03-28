import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./form.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Formd = () => {



    // const history = useHistory();

    const [inpval, setINP] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Company: "",
        Gender: "",
        Graduated: ""
    })

    const setdata = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setINP((preval) => {
            console.log(inpval)
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { FirstName,LastName,Email,Mobile,Company,Gender,Graduated } = inpval;
        
        console.log(FirstName,LastName);

        const res = await fetch("http://localhost:8003/register1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                FirstName, LastName,Email,Mobile,Company,Gender,Graduated
            })
        });

        const data = await res.json();
        console.log(data);

        
    }

    return (
        <div className="containerform">
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="text" value={inpval.FirstName} onChange={setdata} name="FirstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="LastName" class="form-label">Last Name</label>
                        <input type="text" value={inpval.LastName} onChange={setdata} name="LastName" class="form-control" id="LastName" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="Email" class="form-label">Email</label>
                        <input type="text" value={inpval.Email} onChange={setdata} name="Email" class="form-control" id="Email" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="Mobile" class="form-label">Mobile</label>
                        <input type="number" value={inpval.Mobile} onChange={setdata} name="Mobile" class="form-control" id="Mobile" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="Company" class="form-label">Company</label>
                        <input type="text" value={inpval.Company} onChange={setdata} name="Company" class="form-control" id="Company" />
                    </div>
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={inpval.Gender}
                      label="Gender"
                      onChange={setdata}
                      name="Gender"
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      
                    </Select>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <InputLabel id="demo-simple-select-label">Graduated From</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={inpval.Graduated}
                      label="College"
                      onChange={setdata}
                      name="Graduated"
                    >

                      <MenuItem value={"Kharagpur"}>IIT Kharagpur</MenuItem>
                      <MenuItem value={"Kanpur"}>IIT Kanpur</MenuItem>
                      <MenuItem value={"Madras"}>IIT Madras</MenuItem>
                      <MenuItem value={"Delhi"}>IIT Delhi</MenuItem>

                      
                    </Select>
                    </div>

                    {/*<div class="mb-3 col-lg-6 col-md-6 col-12">
                    <LocalizationProvider >
                    <DatePicker />
                  </LocalizationProvider>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                    <LocalizationProvider >
                    <DatePicker />
                  </LocalizationProvider>
    </div>*/}

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Formd;
