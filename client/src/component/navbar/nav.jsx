import {Input, Avatar, Button} from "@mui/joy"
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import src from "/icons/logo.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Nav = () => {

    const user = useSelector(state => state.user)
    return (
        <>
            
            <div className="  ">
                <div className="max-w-7xl mx-auto h-full flex gap-5 w-full justify-between   p-3 md:p-7 md:px-14">
                    <div className="flex gap-9 justify-between md:justify-normal ">
                        <div className="flex items-center gap-3 justify-center">
                            <ListIcon className="md:hidden text-4xl" />
                            <Link to="/" ><img src={src} className="h-10"/></Link>
                        </div>
                        <Input
                            className="rounded-3xl"
                            size="md"
                            variant="soft"  
                            placeholder="Search for cloths, dresses....."
                            startDecorator={<SearchIcon />}
                        />
                    </div>
                    {user ? <div className="md:flex items-center gap-8 hidden">
                        <div className="flex border p-3 rounded-3xl">
                            <ShoppingCartIcon />
                            <h1>Cart: 4</h1>
                        </div>
                        <div className="flex items-center gap-1">   
                            <Avatar variant="soft" />
                            <h1>Hi! {user.name}</h1>
                        </div>
                    </div> :
                    <Button  size="md" color="neutral" className="bg-[#9b806b] rounded-3xl w-28"><Link to="/login"  >Login</Link></Button>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav