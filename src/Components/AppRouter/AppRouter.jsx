import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { LineUpPage } from "../../Pages/LineUpPage/LineUpPage";
import { StoragePage } from "../../Pages/StoragePage/StoragePage";

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
	{
	  path: '/storage',
	  element: <StoragePage />,
	},
  ]);