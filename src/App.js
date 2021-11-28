import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import "./App.css";
// import IndividualService from "./components/Service/IndividualService";
// import Footer from "./components/Footer/Footer";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Registration from "./components/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import NotFound from "./components/NotFound/NotFound";
// new
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import FindWork from "./pages/FindWork/FindWork";
import LearnDesign from "./pages/LearnDesign/LearnDesign";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
// import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/details/:serviceId">
              <IndividualService></IndividualService>
            </PrivateRoute>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute exact path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route> */}
            {/* New */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/findwork">
              <FindWork></FindWork>
            </Route>
            <Route path="/learndesign">
              <LearnDesign></LearnDesign>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
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
