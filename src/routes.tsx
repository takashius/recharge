import Root from "./components/layout/root"
import Auth from "./components/layout/auth"
import ErrorPage from "./components/layout/ErrorPage"

import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import BlogGrid from "./components/pages/blogGrid"
import BlogSidebar from "./components/pages/blogSidebar"
import BlogDetail from "./components/pages/blogDetail"
import SignIn from "./components/pages/signIn"
import SignUp from "./components/pages/signUp"

import History from "./components/pages/institutional/history"
import Philosophy from "./components/pages/institutional/philosophy"
import Infrastructure from "./components/pages/institutional/infrastructure"
import Gallery from "./components/pages/institutional/gallery"

import Cards from "./components/pages/auth/cards"
import Profile from "./components/pages/auth/profile"
import Payments from "./components/pages/auth/payments"

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/news", element: <BlogGrid /> },
      { path: "/blogDetail", element: <BlogDetail /> },
      { path: "/blogSidebar", element: <BlogSidebar /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/institutional/history", element: <History /> },
      { path: "/institutional/philosophy", element: <Philosophy /> },
      { path: "/institutional/infrastructure", element: <Infrastructure /> },
      { path: "/institutional/gallery", element: <Gallery /> },
    ],
  },
  {
    path: '/user',
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/user/cards", element: <Cards /> },
      { path: "/user/profile", element: <Profile /> },
      { path: "/user/payments", element: <Payments /> },
    ],
  },
]