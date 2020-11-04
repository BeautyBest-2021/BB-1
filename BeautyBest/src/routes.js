import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import PrivacyPage from "views/Privacy/Privacy.js";
import ContactPage from "views/Contact/Contact.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";

import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Home from "views/Home/Home.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Appointments",
    rtlName: "قائمة الجدول",
    icon: "event_available",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Do You Have a Salon?",
    rtlName: "الرموز",
    icon: "face",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact/About",
    rtlName: "الرموز",
    icon: "contacts",
    component: ContactPage,
    layout: "/admin",
  },
  {
    path: "/privacy",
    name: "Terms of Policy",
    rtlName: "الرموز",
    icon: "privacy_tip",
    component: PrivacyPage,
    layout: "/admin",
  },
  {
    path: "",
    name: "LOGOUT",
    rtlName: "پشتیبانی از راست به چپ",
    icon: "person_remove",
    component: Home,
    layout: "/login",
  },
];

export default dashboardRoutes;
