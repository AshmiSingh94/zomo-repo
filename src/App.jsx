import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Categories from './pages/categories';
import Resturants from './pages/resturants';
import ResturantDetails from './pages/resturantDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Categories/>,
    },
    {
      path: "catgegories/:categoryid",
      element: <Resturants/>,
    },
    {
      path: "catgegories/:categoryid/resturant/:resturantid",
      element: <ResturantDetails/>,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
