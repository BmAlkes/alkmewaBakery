import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return <RouterProvider router={router} />;
}

export default App;
