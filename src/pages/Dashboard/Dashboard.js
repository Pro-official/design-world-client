import React, { useState } from "react";
// import Navigation from "../Shared/Navigation";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as AiFillHeart from "react-icons/ai";
import * as MdDashboard from "react-icons/md";
import * as AiFillContacts from "react-icons/ai";
import * as IoMdLogOut from "react-icons/io";
import * as MdRateReview from "react-icons/md";
import * as IoMdAddCircle from "react-icons/io";
import * as RiAdminFill from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import AuthProvider from "../../Context/AuthProvider";
import DashHome from "./DashHome/DashHome";
import Loved from "./Loved/Loved";
import Review from "./Review/Review";
import AddDesign from "./AddDesign/AddDesign";
import NewAdmin from "./NewAdmin/NewAdmin";
import Contact from "./Contact";

const Dashboard = (props) => {
  const [sidebar, setSidebar] = useState(false);
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-dashboard">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <AiIcons.AiFillHome style={{ fontSize: "25px" }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to={`${url}`}>
                <MdDashboard.MdDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to={`${url}/loved`}>
                <AiFillHeart.AiFillHeart />
                <span>Loved</span>
              </Link>
            </li>
            {/* <li className="nav-text">
              <Link to={`${url}/mostloved`}>
                <AiFillHeart.AiFillHeart />
                <span>Most Loved</span>
              </Link>
            </li> */}
            <li className="nav-text">
              <Link to={`${url}/review`}>
                <MdRateReview.MdRateReview />
                <span>Review</span>
              </Link>
            </li>
            {admin && (
              <>
                <li className="nav-text">
                  <Link to={`${url}/addnew`}>
                    <IoMdAddCircle.IoMdAddCircle />
                    <span>Add Design</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to={`${url}/newadmin`}>
                    <RiAdminFill.RiAdminFill />
                    <span>New Admin</span>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-text">
              <Link to={`${url}/contact`}>
                <AiFillContacts.AiFillContacts />
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="#">
                <IoMdLogOut.IoMdLogOut />
                <button
                  onClick={logout}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <span>Logout</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      <AuthProvider>
        <Switch>
          <Route exact path={`${path}`}>
            <DashHome></DashHome>
          </Route>
          <Route exact path={`${path}/loved`}>
            <Loved></Loved>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route exact path={`${path}/addnew`}>
            <AddDesign></AddDesign>
          </Route>
          <Route exact path={`${path}/newadmin`}>
            <NewAdmin></NewAdmin>
          </Route>
          <Route exact path={`${path}/contact`}>
            <Contact></Contact>
          </Route>
        </Switch>
      </AuthProvider>
    </>
  );
};

export default Dashboard;
