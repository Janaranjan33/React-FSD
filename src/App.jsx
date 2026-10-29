import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
      path: "/",
      element : <h1> Welcome to HomePage! </h1>
  },
  {
    path: "/contact",
    element : <h2>Welcome to our cantact page! </h2>
  },
   {
    path: "/aboutus",
    element : <h2>Welcome to our About us page! </h2>
  } 
]);

const App = () => {
  return (
    <RouterProvider 
    
    router={router}
    />
  )
}

export default App