import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import {publicRoutes} from "./Routes/Routes";
// import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import { routes } from "./routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
