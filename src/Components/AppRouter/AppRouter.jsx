import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { LineUpPage } from "../../Pages/LineUpPage/LineUpPage";

export const router = createBrowserRouter([
	{
	  path: '/',
	  element: <HomePage />,
	},
	{
	  path: '/lineup',
	  element: <LineUpPage />,
	  children: [
		{
			path: ':stage_id',
			element: <LineUpPage />,
		}
	  ]
	},
  ]);