import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return isSignedIn ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;

//import { useAuth } from "hooks";

//const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//const { isLoggedIn, isRefreshing } = useAuth();
//const shouldRedirect = !isLoggedIn && !isRefreshing;
//return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
//};
//export default PrivateRoute;
