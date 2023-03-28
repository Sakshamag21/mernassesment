const express = require("express");
const router = express.Router();
const users = require("./userSchema");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user create functionality

router.post("/register1",async(req,res)=>{

    const {FirstName,LastName,Email,Mobile,Company,Gender,Graduated} = req.body;
    

    if(!FirstName || !LastName || !Email || !Mobile || !Company || !Gender || !Graduated){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({Email:Email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                FirstName,LastName,Email,Mobile,Company,Gender,Graduated
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser,"adduser");
            console.log(FirstName,LastName,Email,Mobile,Company,Gender,Graduated)
        }

    } catch (error) {
        res.status(422).json(error);
    }
})



// router.post("/register1",async(req,res)=>{

//     const {component1,component2,component3,component4,component5,component6,component7} = req.body;
    

//     if(!component1 || !component2 || !component3 || !component4 || !component5 || !component6 || !component7){
//         res.status(422).json("plz fill the data");
//     }

//     try {
        
//         const preuser = await users.findOne({component1:component1});
//         console.log(preuser);

//         if(preuser){
//             res.status(422).json("this is user is already present");
//         }else{
//             const adduser = new users({
//                 component1,component2,component3,component4,component5,component6,component7
//             });

//             await adduser.save();
//             res.status(201).json(adduser);
//             console.log(adduser,"adduser");
//         }

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// get userdata  request data functionality

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getuser/:component",async(req,res)=>{
    try {
        console.log(req.params);
        const {component} = req.params;

        const userindividual = await users.findOne({component:component});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data update user functionality

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id,"id");

        // const updateduser = await users.findByIdAndUpdate(id,req.body,{
        //     new:true
        // });
        const updateduser = await users.findOneAndUpdate({"_id":{$gte:id}},{$set:req.body})

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/updateuser/:component",async(req,res)=>{
    try {
        const {component} = req.params;
        console.log(component,"id");

        // const updateduser = await users.findByIdAndUpdate(id,req.body,{
        //     new:true
        // });
        const updateduser = await users.findOneAndUpdate({component:component},{$set:req.body})

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})
 
// delete user delete user functionality
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.delete("/deleteuser/:component",async(req,res)=>{
    try {
        const {component} = req.params;

        const deletuser = await users.findByIdAndDelete({component:component})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;










