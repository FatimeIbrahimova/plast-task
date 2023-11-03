import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/Route";

const router = createBrowserRouter(ROUTES)

function App() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
