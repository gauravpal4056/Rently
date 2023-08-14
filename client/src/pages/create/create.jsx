import { Button, Input, Select, Textarea, Option } from "@mui/joy"
import { useState } from "react"
import SimpleMap from "../../component/map/map"

const Create = () => {
    const selStyle = "bg-[#9b806b] hover:bg-[#776252]"
    const unSel = "bg-gray-400 hover:bg-gray-500"
    const [cond, setCond] = useState("new")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [cat, setCat] = useState("shirt")
    const [gen, setGen] = useState("male")
    const [size, setSize] = useState("m")
    const [loc, setLoc] = useState({lat:0, lng:0})
    const handleLoc = (e) => {
        setLoc(e);
        console.log(e);
    }
    const handleChange = (event, newValue) => {
        setCat(newValue)
    };
    return (
        <>
            <div className=" bg-slate-50 h-[87vh]">
                <div className="max-w-4xl  h-full mx-auto  p-9">
                    <h1>-Back</h1>
                    <h1 className="text-3xl text-center mb-8 font-bold text-gray-500">Add a product</h1>
                    <div className="flex justify-center gap-9">
                        <div>
                            <div className="flex items-center justify-center h-80 w-80 bg-slate-400 rounded-lg">
                            <input type="file"/>    
                            </div>
                            <div className="flex gap-5 mt-6">
                                <div className="h-20 rounded-lg w-20 bg-slate-400">
                                </div>
                                <div className="h-20 w-20 bg-slate-400">
                                </div>
                                <div className="h-20 w-20 bg-slate-400">
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Product Name</h1>
                            <Input name="name" value={name} onChange={(e) => {setName(e.value)}} />
                            <h1>Renting Price</h1>
                            <Input name="price" value={price} onChange={(e) => {setPrice(e.value)}} />
                            <h1>Condition</h1>
                            <div className="flex gap-2">
                                <Button onClick={() => setCond("new")} className={cond==="new" ? selStyle : unSel}>Like new</Button>
                                <Button onClick={() => setCond("mod")} className={cond==="mod" ? selStyle : unSel}>Moderate</Button>
                                <Button onClick={() => setCond("ev")} className={cond==="ev" ? selStyle : unSel}>Everyday</Button>
                            </div>
                            <h1>Select Category</h1>
                            <Select defaultValue="shirt" onChange={handleChange}>
                                <Option value="Jeans">Jeans</Option>
                                <Option value="shoes">shoes</Option>
                                <Option value="tshirt">tshirt</Option>
                                <Option value="top">top</Option>
                                <Option value="dress">dress</Option>
                                <Option value="onePeice">onePeice</Option>
                                <Option value="twoPeice">twoPeice</Option>
                                <Option value="hoody">hoody</Option>
                                <Option value="shirt">shirt</Option>
                            </Select>
                            <h1>For</h1>
                            <div className="flex gap-2">
                                <Button onClick={() => setGen("male")} className={gen==="male" ? selStyle : unSel}>HIM</Button>
                                <Button onClick={() => setGen("female")} className={gen==="female" ? selStyle : unSel}>HER</Button>
                            </div>
                            <h1>Size</h1>
                            <div className="flex gap-2">
                                <Button onClick={() => setSize("s")} className={size==="s" ? selStyle : unSel}>S</Button>
                                <Button onClick={() => setSize("m")} className={size==="m" ? selStyle : unSel}>M</Button>
                                <Button onClick={() => setSize("m")} className={size==="l" ? selStyle : unSel}>L</Button>
                            </div>
                            <h1>Description</h1>
                            <Textarea  name="desc" value={desc} onChange={(e) => {setDesc(e.value)}} className="" />
                        </div>
                    </div>
                    <h1>choose Longitude and Latitude for {loc.lat}</h1>
                    <SimpleMap loc={loc} handleLoc={handleLoc} />

                </div>
                
            </div>
        </>
    )
}

export default Create