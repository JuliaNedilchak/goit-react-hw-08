//import ContactForm from "./components/ContactForm/ContactForm";
//import SearchBox from "./components/SearchBox/SearchBox";
//import ContactList from "./components/ContactList/ContactList";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { fetchContacts } from "./redux/contacts/operations";
//import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
//import { selectError, selectIsLoading } from "./redux/contacts/selectors";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import Layout from "./components/Layout";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectIsLoading);
  //const isError = useSelector(selectError);

  //useEffect(() => {
  //dispatch(fetchContacts());
  //}, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <SearchBox />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
