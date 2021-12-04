import * as Router from "react-router-dom";
import { Home } from "./index/Home";
import { Photos } from "./photos/Photos";
import { Favorites } from "./favorites/Favorites";

/**
 * @component: <Routes />
 * @description: the react router component that renders the correct page based on the current URL.
 *
 * @returns JSX.Element
 */
export const Routes = () => {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="/photos" element={<Photos />} />
        <Router.Route path="/favorites" element={<Favorites />} />
      </Router.Routes>
    </Router.BrowserRouter>
  );
};
