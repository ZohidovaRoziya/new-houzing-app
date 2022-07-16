import Generic from "../components/Generic"
import Home from "../pages/Home"
export const navbar = [
    {id:1, title: "Home", element: <Home/>, path: "/home", hidden: false},
    {id:2, title: "Properties", element: <Generic/>, path: "/properties", hidden: false},
    {id:3, title: "Contact", element: <Generic/>, path: "/contact", hidden: false},
    {id:4, title: "Sign In", element: <Generic/>, path: "/signin", hidden: true},
    {id:5, title: "Sign Up", element: <Generic/>, path: "/signup", hidden: true},
]