import Root from "./components/layout/root"
import ErrorPage from "./components/layout/ErrorPage"

import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import BlogGrid from "./components/pages/blogGrid"
import BlogSidebar from "./components/pages/blogSidebar"
import BlogDetail from "./components/pages/blogDetail"
import SignIn from "./components/pages/signIn"
import SignUp from "./components/pages/signUp"

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blogGrid", element: <BlogGrid /> },
      { path: "/blogDetail", element: <BlogDetail /> },
      { path: "/blogSidebar", element: <BlogSidebar /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
]