// import {RouterProvider,createBrowserRouter} from 'react-router-dom'

// import HomeLogin from './pages/Login/HomeLogin';
// import Home from './pages/Home/Home';
// import NotFound404 from './pages/Error404/Error404';

// const router = createBrowserRouter([
//   {path:"/", element: (<HomeLogin/>)},
//   {path:"/home", element: (<Home/>)},
//   {path:"*", element: (<NotFound404/>)}
// ])

// function App() {
//   return (
//     <RouterProvider router={router}/>
//   );
// }

// export default App;
// import { Route, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLogin from './pages/Login/HomeLogin';
import Home from './pages/Home/Home';
import NotFound404 from './pages/Error404/Error404';

function App() {
  var isAuthenticated = sessionStorage.getItem("isAuthenticated");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin/>} />
        <Route path="*" element={<NotFound404/>} />
        {!isAuthenticated ? 
          <Route path="/" element={<HomeLogin/>} />
        : 
          <Route path="/home" element={<Home/>} />
        }
      </Routes>
    </Router>
  );
}

export default App;
