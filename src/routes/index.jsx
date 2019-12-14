import Layout from "layouts/DashboardLayout.jsx";
import {
    LockScreen,
    Login,
    Register,
    Error400,
    ForgotPassword,
    Error500,
    PricingStyle1,
    PricingStyle2
} from "./../views/pages/index";

const indexRoutes = [
    { path: "/pricing/style1", component: PricingStyle1 },
    { path: "/pricing/style2", component: PricingStyle2 },
    { path: "/lockscreen", component: LockScreen },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/error400", component: Error400 },
    { path: "/error500", component: Error500 },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/", component: Layout }
];

export default indexRoutes;
