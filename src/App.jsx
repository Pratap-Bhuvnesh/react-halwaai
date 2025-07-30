import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Github from './Github.jsx'
/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
       { path: 'contact', element: <Contact /> },
    ]
  }
]) */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path= '/' element={<Layout />}>
      <Route  path= '' element={<Home />} />
      <Route  path= 'about' element={<Home />} />
      <Route  path= 'contact/:id' element={<Contact />} />
      <Route  path= 'github' element={<Github />} />
    </Route>
  )
)
function App() {
  return(
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
   
}
export default App
