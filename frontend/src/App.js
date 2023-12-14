import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import HomeLogin from './pages/Login/HomeLogin';
import Home from './pages/Home/Home';
import NotFound404 from './pages/Error404/Error404';

const router = createBrowserRouter([
  {path:"/", element: (<HomeLogin/>)},
  {path:"/home", element: (<Home/>)},
  {path:"*", element: (<NotFound404/>)}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
