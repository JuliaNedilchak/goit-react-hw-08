import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"

const Navigation = () => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigate}>
      <NavLink to="/">Home</NavLink>
      {isSignedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
