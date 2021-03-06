import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import FindWork from "./pages/FindWork/FindWork";
import LearnDesign from "./pages/LearnDesign/LearnDesign";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
import PrivateRoute from "./pages/Shared/PrivateRoute/PrivateRoute";
import IndividualDesign from "./pages/Home/Designs/IndividualDesign";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/designs/:id">
              <IndividualDesign></IndividualDesign>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/findwork">
              <FindWork></FindWork>
            </PrivateRoute>
            <PrivateRoute path="/learndesign">
              <LearnDesign></LearnDesign>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
