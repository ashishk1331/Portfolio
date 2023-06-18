import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPage from "./blog/BlogPage";
import Cases from "./pages/Cases";
import "./index.css";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
	{
		path: "/blog/:blogID",
		element: <BlogPage />,
	},
	{
		path: "cases",
		element: <Cases />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
