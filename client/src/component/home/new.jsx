
const New = () => {
    return (
        <>
            <div className=" mx-auto  ">
                <div className="flex md:flex-row flex-col w-full">
                    <div className="">
                        <div className="max-w-xl  m-2  overflow-hidden rounded-3xl bg-slate-100 ">
                            <div className="h-40 w-96   bg-cover flex flex-col px-9 justify-center bg-[url(/hero2/hero.jpg)]">
                                <h1 className="text-4xl font-bold text-white uppercase text-left">Rent it now</h1>
                                <h1 className="text-white">Why Buy when you can Rent it</h1>
                            </div>
                        </div>
                        <div className="max-w-2xl  m-2 overflow-hidden rounded-3xl bg-slate-100 ">
                            <div className="h-40 bg-[url(/hero2/sandals.jpg)]  bg-cover flex flex-col justify-center px-4 hover:scale-105 transition-all ">
                                <h1 className="text-4xl uppercase font-bold">Jackets</h1>
                                <h1>that suits you</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="max-w-xs h-80 m-2 rounded-3xl w-52 overflow-hidden bg-slate-100">
                            <div className=" h-80 w-52 transition-all  text-[#5d0e21] bg-[url(/hero2/shoes.jpg)] bg-center bg-cover flex flex-col items-center justify-end p-8 hover:scale-105">
                                <div className="">
                                    <h1 className="uppercase text-4xl font-bold ">Shoes</h1>
                                    <h1>find the best fit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xs h-80 w-52 m-2 overflow-hidden bg-slate-100 rounded-3xl bg-[url(/hero2/jeans.jpg)] bg-center bg-cover  ">
                            <h1 className="uppercase font-bold text-4xl p-3 pt-5 text-right" >Jeans</h1>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col w-full ">
                    
                    <div className="flex">
                        <div className="max-w-xs h-80 w-52  m-2 overflow-hidden rounded-3xl bg-[url(/hero2/tshirt.jpg)] bg-center bg-cover  "></div>
                        <div className="max-w-xs h-80 w-52 m-2 overflow-hidden rounded-3xl bg-[url(/hero2/shoe2.jpg)] bg-center bg-cover "></div>
                    </div>
                    <div className="">
                        <div className="max-w-2xl  m-2 overflow-hidden rounded-3xl bg-slate-100 ">
                            <div className="h-40 w-96 text-white bg-[url(/hero2/tshirt.png)]  bg-cover flex flex-col justify-center px-4 hover:scale-105 transition">
                                <h1 className="text-4xl uppercase font-bold">T-Shirts</h1>
                                <h1>Plain but classic</h1>
                            </div>
                        </div>
                        <div className="max-w-2xl  m-2 overflow-hidden rounded-3xl bg-slate-100 ">
                            <div className="h-40 w-96 text-black bg-[url(/hero2/shirt.png)]  bg-cover flex flex-col justify-center items-end px-4 hover:scale-105 transition">
                                <h1 className="text-4xl uppercase font-bold">Shirts</h1>
                                <h1>For the HIM !</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New