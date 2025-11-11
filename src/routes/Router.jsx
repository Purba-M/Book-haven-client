import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/home/Home"
import Allbooks from "../pages/books/Allbooks";
import AddBooks from "../pages/books/AddBooks";
import Mybooks from "../pages/books/Mybooks";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allbooks',
                element:<Allbooks></Allbooks>
            },
            {
                path:'/add-book',
                element:<AddBooks></AddBooks>
            },
            {
                path:'/my-books',
                element:<Mybooks></Mybooks>
            }
        ]
    }
])

export default router;