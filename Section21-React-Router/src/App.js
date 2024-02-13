import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Navigation from "./components/Navigation";
import Root from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage";
import './index.css'
import ProductDetilsPage from "./Pages/ProductDetailsPage";

function App() {
  //ALternative way
//  const routeDef =  createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<HomePage />} />
//       <Route path='/product' element={<ProductPage/>} />
//     </Route>
//   )
//   const router = createBrowserRouter(routeDef);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element:<HomePage />},
        { path: 'product', element:<ProductPage />},
        { path: 'product/:productId', element: <ProductDetilsPage />}
      ]
    }
  
  ])
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
