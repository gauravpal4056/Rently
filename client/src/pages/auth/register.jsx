import { Input } from "@mui/joy"
import Button from '@mui/joy/Button';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-[url(/loginHero/hero2.jpg)] backdrop-blur h-screen w-screen bg-center bg-cover relative ">
                <div className="backdrop-blur-md w-full h-full flex justify-center items-center">
                    <div className="w-96 rounded-xl text-[#fef5ef]  bg-[#574158] z-30 flex flex-col items-center p-5 ">
                    <img onClick={() => {navigate('/')}}  className="w-32 mx-auto" src="/logoDark.png" />    
                        <div>
                            <h1 className="text-center text-4xl mt-4 font-bold text-[#fef5ef]">Create Your Account      </h1>
                            <h1 className="mb-4 text-sm">Let's rent something for you</h1>
                            <h1 className="text-left text-xs w-full">Enter your email</h1>
                            <Input className="" size="sm" variant="soft" />
                            <h1 className="text-left text-xs  mt-4 w-full">Enter your password</h1>
                            <Input className="" size="sm" variant="soft" />
                            <Button className="w-full my-8 bg-[#fef5ef]" variant="outlined" onClick={function(){}}>Register </Button>
                            <h1>Already have an account? <span onClick={() => {navigate('/login')}}  className="underline cursor-pointer hover:text-blue-500">Login</span></h1>
                        </div>
                    </div>
                </div>
                {/* <div className="h-36     w-1/2 bg-[#f2dab8] absolute bottom-0"></div> */}
            </div>
        </>
    )
}

export default Register