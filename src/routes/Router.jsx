import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/home/Home"
import Allbooks from "../pages/books/Allbooks";
import AddBooks from "../pages/books/AddBooks";
import Mybooks from "../pages/books/Mybooks";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Regstration";
import Authlayout from "../layouts/AuthLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import Bookdetails from "../pages/books/Bookdetails";
import Private from "../components/Private";
import Update from "../pages/books/Update";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorLayout></ErrorLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allbooks',
                element:
                  <Allbooks></Allbooks>
              
            },
            {
                path:'/add-book',
                element:<Private><AddBooks></AddBooks></Private>
            },
            {
                path:'/my-books',
                element:<Private><Mybooks></Mybooks></Private>
            },
            {
                path:'/book-details/:id',
                element:<Private><Bookdetails></Bookdetails></Private>
            },
            {
              path:'/update-book/:id',
              element:<Private><Update></Update></Private>
            }
        ]

    },
    {
    path: "/auth",
    element: <Authlayout />,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Registration/>,
      },
    ],
  },
])

export default router;