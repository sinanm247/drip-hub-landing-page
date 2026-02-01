import Thankyou from "../Components/ThankYouPage/Thankyou";
import HomePage from "../Pages/HomePage";
import DripDetailPage from "../Pages/DripDetailPage";

const routes = [
  {
    path: "/",
    element: <HomePage/>,
    isProtected: false,
  },
  {
    path: "/thank-you",
    element: <Thankyou/>,
    isProtected: false,
  },
  {
    path: "/drip/:id",
    element: <DripDetailPage/>,
    isProtected: false,
  },
];

export default routes;