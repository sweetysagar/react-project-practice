import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./feature/Header";
import Body from "./feature/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import { Contact } from "./feature/Contact";
import { Error } from "./feature/Error";
import { ResturantMenu } from "./feature/ResturantMenu";
import { UserClass } from "./feature/userClass";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./feature/Cart";
import { RegistrationForm } from "./feature/Register/RegistrationForm";

const Grocery = lazy(() => import("./feature/Grocery").then((m) => ({default: m.Grocery})));

const About = lazy(() => import("./feature/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const data = {
            name: "Zacky Bills"
        }
        setUserName(data.name);
    },[]);

    return ( 
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
    <div className="container">
        <UserContext.Provider value={{loggedInUser: "Elon Musk"}}>
        <Header />
        </UserContext.Provider>
       <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    )

}



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/form",
        element: <RegistrationForm />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About is loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/userclass",
        element: <UserClass />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>fallback called</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {appRouter} />);
