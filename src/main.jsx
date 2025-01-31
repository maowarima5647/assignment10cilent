import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Allreview from './Allreview.jsx'
import Myreview from './Myreview.jsx'
import Gamewatchlist from './Components/Gamewatchlist.jsx'
import Signin from './firebase/Signin.jsx'
import Signup from './firebase/Signup.jsx'
import Root from './Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addreview from './Components/Addreview.jsx'
import Updatereview from './Components/Updatereview.jsx'
import Authprovider from './firebase/Authprovider.jsx'
import Detailspage from './Components/Detailspage.jsx'
import NotFound from './Components/Notfound.jsx'
import Privaterout from './firebase/Privaterout'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   
    children:[
     {
      path: "/",
      element: <App></App>,
      loader : () => fetch('http://localhost:5000/game'),
     },
      {
        path: "allreview",
        element: <Allreview></Allreview>,
        loader : () => fetch('http://localhost:5000/game'),
      },
      {
        path: "addreview",
        element:<Privaterout> <Addreview></Addreview> </Privaterout> ,
        loader : () => fetch('http://localhost:5000/user')
      },
      {
        path: "myreviews",
        element: <Privaterout> <Myreview></Myreview></Privaterout>,
        loader : () => fetch('http://localhost:5000/game'),
      },
     
      {
        path: "updatereiew/:id",
        element:<Privaterout>  <Updatereview></Updatereview></Privaterout>,
        loader:({params}) => fetch(`http://localhost:5000/game/${params.id}`)
      },
      {
        path: "gamewishlist",
        element: <Privaterout> <Gamewatchlist></Gamewatchlist></Privaterout>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/details/:id",
        element:<Privaterout><Detailspage></Detailspage> </Privaterout> ,
        loader: async ({ params }) => {
          const response = await fetch('http://localhost:5000/game');
          const details = await response.json();
          return details.find((brand) => brand._id === params.id); 
        },
      
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ]
  },

 

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    
  </StrictMode>,
)
