
import { Button, Input, Select, Textarea, Option } from "@mui/joy"


const ProductDetail = () => {
    return (
        <div className="w-full h-screen bg-gray-200 p-2">
            <div className="max-w-4xl mx-auto bg-white">
                <div className="flex p-3 gap-9 justify-center">
                    <div className=" w-72 bg-gray-500">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="max-w-md pt-5">
                        <h1 className="text-2xl font-bold">legging with strap on handbag</h1>
                        <h1 className="text-[#555]"> i dont what to write but i am still writing i dont jnow but the thing is that ki i thing i won </h1>

                        <div className="flex gap-9 my-3">
                            <div  className="text-black px-6 hover:bg-[#dbdbdb]  text-justify rounded-3xl border-2 " >$450</div>
                            <Button className="bg-[#9b806b] hover:bg-[#7c6553] px-6 rounded-3xl">Rent</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail