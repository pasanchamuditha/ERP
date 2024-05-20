import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


import App from "../App";
import Home from "../home/Home";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadItem from "../dashboard/UploadItem";
import ManageItems from "../dashboard/ManageItems";
import EditItem from "../dashboard/EditItem";
import Adminlog from "../home/Adminlog";
import Sellerlogin from "../home/Sellerlogin";
import Testone from "../dashboard/Testone";
import AdminManage from "../dashboard/AdminManage";
import AdminCreateUpload from "../dashboard/AdminCreateUpload";
import Adminedit from "../dashboard/Adminedit";
import Sellerinput from "../home/seller/Sellerinput";
import Posdash from "../Pos/Posdash";
import Productsupplierjoin from "../Analitics/Productsupplierjoin";
import Avalibility from "../Analitics/Avalibility";
import Searchpage from "../searchbar/Searchpage";
import Billpage from "../Billing/Billpage";
import Coustomerbillig from "../Billing/Coustomerbillig";


const router = createBrowserRouter([


    {
      path: "/",
      element: <App/>,
      
      //childrens from the root element
      children:[
        {
           path:"/",
           element: <Home/>
        },

        {
          path:"/adminlogin",
          element: <Adminlog/>

        }
        ,

        {

          path:"/sellerlogin",
          element: <Sellerlogin/>

        },
       

        {

          path:"/sellerinput",
          element: <Sellerinput/>

        },



                ]
    }
    
    ,

    
    {
      path:"/dashboard",

      
      element:<DashboardLayout/>,
      //children of this element

      
      children: [

       {
        path:"/dashboard",
       element:<Dashboard/>
       },


       {
        path:"/dashboard/upload",
        element:<UploadItem/>
       },


       {
        path:"/dashboard/manage",
        element:<ManageItems/>
       },
       
       


       {
        path:"/dashboard/edit-Item/:PRODUCT_CODE",
        element:<Testone/>,
        loader: ({params}) => fetch(`http://localhost:3001/Item/${params.PRODUCT_CODE}`)

       },



                      //this is the admin and admin manage items



       {
         path:"/dashboard/Adminupload",
         element:<AdminCreateUpload/>
      },



       {
        path:"/dashboard/Adminmanage",
        element:<AdminManage/>
       },


       {
        path:"/dashboard/Admin-manage/:USER_ID",
        element:<Adminedit/>,
        loader: ({params}) => fetch(`http://localhost:3001/Admin/${params.USER_ID}`)
       },

       {
        path:"/dashboard/POS",
        element:<Posdash/>
       },
       

       {
        path:"/dashboard/productjoinsupplier",
        element:<Productsupplierjoin/>
       },
       {
        path:"/dashboard/Avalable-items",
        element:<Avalibility/>
       },

       {
        path:"/dashboard/search-items",
        element:<Searchpage/>
       },
       
       {
        path:"/dashboard/Billing-items",
        element:<Billpage/>
       },

       {
        path:"/dashboard/coustomer-bill",
        element:<Coustomerbillig/>
       },




      ]
    }   
 ,











    
   

  ]);

  export default router;


 /*,{
        path:"dashboard/edit-book/:id",
        element:<EditBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
       }*/
         /*,

    {
      path:"sign-up",
      element: <Signup/>
    },
    {

      path:"login",
      element: <Login/>
    },
    {
      path:"logout",
      element:<Logout/>

    }*/