import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainOutlet from "./components/MainOutlet/MainOutlet";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
