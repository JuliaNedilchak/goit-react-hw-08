import { useSelector } from "react-redux";
import {
  selectUser,
  selectisRefreshing,
  selectIsLoggedIn,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);
  const user = useSelector(selectUser);
  return {
    isSignedIn,
    isRefreshing,
    user,
  };
};
