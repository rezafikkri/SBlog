import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "../common/ErrorPage";
import Posts from "../features/posts/Posts";
import CreatePost from "../features/posts/CreatePost";
import EditPost from "../features/posts/EditPost";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts/create",
        element: <CreatePost />
      },
      {
        path: "posts/edit/:postId",
        element: <EditPost />
      },
    ],
  }, 
]);
