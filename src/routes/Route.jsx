import MainRoot from "../components/MainRoot";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Devices from "../pages/Devices/Devices";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ReceivedProducts from "../pages/ReceivedProducts/ReceivedProducts";
import Search from "../pages/Search/Search";


export const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"receivedProducts",
                element:<ReceivedProducts/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"devices",
                element:<Devices/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"search",
                element:<Search/>
            }
        ]
    }
];