import "./landing.css";
// import Carduser from "../card/card";
import { useState,useEffect } from "react";
import Carduser from "../card/card";
import { Card, CardContent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Landing(){
    const [getuserdata, setUserdata] = useState([]);
    
    const [inpval, setINP] = useState({
    
        Name: "",
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

    const getdata = async () => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data",getuserdata);

        }
    }
    
    
    
    useEffect(() => {
        getdata();
    },[])

    

    

    return(<div className="landing">
        <h1>Landing</h1>
        
        <Card style={{width:"200px",height:"100vh",position:"absolute"}}>
        <CardContent>
        
        <div >
            <label  class="form-label">Filter By Name</label>
            <input type="text"  name="Name" class="form-control" value={inpval.Name} onChange={setdata} id="Name"/>
        </div>
        
        <div >
            <label  class="form-label">Filter By Company</label>
            <input type="text"  name="Company" class="form-control" value={inpval.Company} onChange={setdata} id="Comapny"/>
        </div>
        <div >
        <InputLabel id="demo-simple-select-label">Filter By Gender</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Gender"
        name="Gender"
        value={inpval.Gender}
        onChange={setdata}
      >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        
      </Select>
        </div>
        <div >
        <InputLabel id="demo-simple-select-label">Filter By Graduated From</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Graduated"
        name="Graduated"
        value={inpval.Graduated}
        onChange={setdata}
      >
        <MenuItem value={"Kanpur"}>IIT Kanpur</MenuItem>
        <MenuItem value={"Kharagpur"}>IIT Kharagpur</MenuItem>
        <MenuItem value={"Delhi"}>IIT Delhi</MenuItem>
        <MenuItem value={"Madras"}>IIT Madras</MenuItem>
        
      </Select>
        </div>
        
        </CardContent></Card>
        <div style={{position:"relative"}}>
        {getuserdata && getuserdata.map(val=>{
            return(<Carduser Name={val.FirstName+" "+val.LastName} Mobile={val.Mobile} Gender={val.Gender} Email={val.Email} Company={val.Comapny} Graduated={val.Graduated} Id={val._id}></Carduser>)
        })}</div>
        
        </div>)
}