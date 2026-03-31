import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const [euserName,setenterUsername]=useState("")
    const [epassword,setenterPassword]=useState("")
    const [ruser,setRuser]=useState(true)

    const users = props.users
  

    function handleUserInput(evt)
    {
        setenterUsername(evt.target.value)
    }
    function handlePassInput(evt)
    {
        setenterPassword(evt.target.value)
    }
    function Checkuser()
    {
        let userfound = false
        users.forEach(function(item)
        {
            if(item.username === euserName && item.password === epassword )
            {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:euserName}})
            }
           
        })
        if(userfound===false)
        {
            console.log("login failed")
            setRuser(false)
        }
    }
    return(
         <div className="bg-black p-10 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600 font-bold">Please SignUp Before you Login</p>}

        <div className="flex flex-col gap-2 my-2">
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handleUserInput} placeholder="Username" />
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handlePassInput} placeholder="Password" />
           
            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>
            <p>Don't Have an Account? <Link to={"/Signup"} className="underline">SignUp</Link></p>
        </div>
      </div>
    </div>
    )
}

export default Login