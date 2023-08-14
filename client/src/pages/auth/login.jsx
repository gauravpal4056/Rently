import { Input } from "@mui/joy"
import Button from '@mui/joy/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [data, setData] = useState({email:"", password:""})
    const handleInput = (e) => {
        console.log(data)
        const name = e.target.name
        setData(prev=> ({...prev, [name]:e.target.value}))
    }
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-[url(/loginHero/hero2.jpg)] backdrop-blur h-screen w-screen bg-center bg-cover relative ">
                <div className="backdrop-blur-md w-full h-full flex justify-center items-center">
                    <div className="md:w-96 rounded-xl   bg-white z-30 flex flex-col items-center p-5 ">
                    <img onClick={() => {navigate('/')}} className="cursor-pointer w-32 mx-auto" src="/icons/logo.png" />    
                        <div>
                            <h1 className="text-center text-4xl mt-4 font-bold text-[#75675e]">Welcome back</h1>
                            <h1 className="mb-4 text-sm">Let's rent something for you</h1>
                            <h1 className="text-left text-xs w-full text-[#797979]">Enter your email</h1>
                            <Input value={data.email} name="email" onChange={handleInput} className="" size="sm" variant="soft" />
                            <h1 className="text-left text-xs  mt-4 w-full text-[#797979]">Enter your password</h1>
                            <Input value={data.password} name="password" onChange={handleInput} className="" size="sm" variant="soft" />
                            <Button className="w-full my-8 bg-[#9b806b] text-white hover:bg-[#836b59]" variant="outlined" onClick={function(){}}>Login </Button>
                            <h1>Don't have a account? <span onClick={() => {navigate('/register')}} className="underline cursor-pointer hover:text-blue-500">Create one</span></h1>
                        </div>
                    </div>
                </div>
                {/* <div className="h-36     w-1/2 bg-[#f2dab8] absolute bottom-0"></div> */}
            </div>
        </>
    )
}

export default Login