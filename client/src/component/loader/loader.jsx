import { Button } from "@mui/joy"

const Loader = () => {
    return (

        <>
            <div className=" h-screen sticky  top-0 w-full flex items-center justify-center bg-[#9b806b] m-0">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
                    <img className="h-10 animate-spin" src="/loading.png" />
                    <h1 className="text-xl font-bold">Loading</h1>
                </div>
            </div>
        </>

    )
}

export default Loader