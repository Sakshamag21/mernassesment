import "./card.css"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Carduser(props){
    console.log(props,"props")
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const deleteuser = async (id) => {
    console.log("yes")
    console.log(id);
    const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        
    }

}
    return(<Card  style={{marginLeft:"220px"}}>
        <CardContent className="cardContainer">  
    <img src="" ></img>
    <h3>Name: {props.Name}</h3>
    <h3>Mobile: {props.Mobile}</h3>
    <h3>Email: {props.Email}</h3>
    <h3>Company: {props.Comapny}</h3>
    <h3>Graduated: {props.Graduated}</h3>
    <h3>Gender: {props.Gender}</h3>
    
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{height:"50px"}}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Date 1</Typography>
        <Typography sx={{ p: 2 }}>Date 2</Typography>
      </Popover>
    </div>
    <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{height:"50px"}}>
        Edit
      </Button>
      <Button aria-describedby={id} variant="contained" onClick={() => deleteuser(props.Id)} style={{height:"50px"}}>
        Delete
      </Button>
    </CardContent></Card>)


}