import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Explore = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState("home")
    const sel_Style =  "flex items-center gap-1 p-2 m-1 cursor-pointer rounded-3xl bg-[#9b806b] text-white hover:bg-[#9b806b] transition-all duration-200 transition ease-in-out  justify-center" 
    const unsel_Style = "flex items-center gap-1 p-2 m-1 cursor-pointer  rounded-3xl  hover:bg-slate-100 transition-all duration-200 transition ease-in-out  justify-center"
    return (
        <>
            <div className=" mr-10 md:block hidden">
                <h1 className="text-4xl  font-bold text-gray-700 mb-4">Explore</h1>
                <div>
                    <div className={selected=="home" ? sel_Style : unsel_Style}  onClick={() => {setSelected("home")}}>
                        <img className="h-8" src="/icons/home.png" />
                        <h1 className="text-md">Home</h1>
                    </div>
                    <div className={selected=="shirts" ? sel_Style : unsel_Style}  onClick={() => {setSelected("shirts")}}>
                        <img className="h-8" src="/icons/category/shirt.png" />
                        <h1 className="text-md">Shirts</h1>
                    </div>
                    <div className={selected=="sh" ? sel_Style : unsel_Style} onClick={() => {setSelected("sh")}}>
                        <img className="h-8" src="/icons/category/shoes.png" />
                        <h1 className="text-md">Shoes</h1>
                    </div>
                    <div className={selected=="ku" ? sel_Style : unsel_Style} onClick={() => {setSelected("ku")}}>
                        <img className="h-8" src="/icons/category/kurta.png" />
                        <h1 className="text-md">Kurta</h1>
                    </div>
                    <div className={selected=="t" ? sel_Style : unsel_Style} onClick={() => {setSelected("t")}}>
                        <img className="h-8" src="/icons/category/tshirt.png" />
                        <h1 className="text-md">T-Shirts</h1>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="">
                    <h1 className="text-[#868686]">Quick actions</h1>
                    <div onClick={() => {navigate('/create_product')}} className="flex gap-3 mt-4 hover:bg-slate-100 p-3 rounded-3xl cursor-pointer"> 
                        <img className="h-7 rounded-md bg-slate-100 p-1" src="/icons/plus.png" />
                        <h1 className="font-bold">Add product</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore