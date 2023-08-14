import { useEffect, useState } from "react"
import Explore from "../../component/home/explore"
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "../../store/homeSlice"
import New from "../../component/home/new"
import Loader from "../../component/loader/loader"

const Home = () => {
    const dispatch = useDispatch()
    const query = useSelector(state => state.query)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(setQuery({}));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Loader/> :
                <div className=' '>
                    <div className='flex  mx-auto max-w-6xl p-4'>
                        <Explore/>
                        <New />
                    </div>
                </div>
    
            }
            
            
        </>
    )
}

export default Home