import { useState } from "react";


const App=()=>{
   let [state,setState]=useState(
    {
        name:"",
        password:"",
        gender:""

    }
   )
   let [skills,setSkills]=useState([]);
   let{name,password,gender}=state;
   
   let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(skills);
    console.log(state);
   }
   let handleChange=(e)=>{
    console.log(e);
    let{name,value}=e.target;
    setState({...state,[name]:e.target.value})
   }
   let handleSkills=(e)=>{
    //setSkills([...skills,e.target.value])
    console.log(e);
    console.log(e.target.value);
    if(e.target.checked==true){
        setSkills([...skills,e.target.value]);

    }
    else{
        let rem=skills.filter((val)=>{
            return val!==e.target.value;
        })
        setSkills(rem);
    }
    
    
   }

   return(

    <form action="" id="form" onSubmit={handleSubmit}>
        <h1 id="h1">Login Form</h1>
        <div>
            <label htmlFor="">Enter UserName:</label>
            <input type="text" name="name" value={name} onChange={handleChange}/>
        </div><br /><br />
         <div>
            <label htmlFor="">Enter Password:</label>
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </div><br />
         <div value={gender} name="gender" onChange={handleChange}>
            <label htmlFor="">Gender:</label>
            <input type="radio" name="gender" value={"male"}/>Male
            <input type="radio" name="gender" value={"female"} />Female
        </div><br /><br />
        <div value={skills} name="skills" onChange={handleSkills} >
            <label htmlFor="">Skills:</label>
            <input type="checkbox" name="skills" value="java"/>Java
            <input type="checkbox" name="skills" value="Python"/>Python
            <input type="checkbox" name="skills" value="web"/>webTech
        </div><br /><br />
        <div>
            <input type="submit" id="submit-btn"/>
        </div>
    </form>
   )
    
    

}
export default App;