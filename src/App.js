import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/Route";
import { useTranslation } from "react-i18next";

const router = createBrowserRouter(ROUTES)

function App() {
	const { t } = useTranslation();
	return (
		<div>
			{/* {t("Welcome_to_React")} */}
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
