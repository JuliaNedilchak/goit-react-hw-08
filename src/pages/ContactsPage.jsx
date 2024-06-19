import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiPhonebookContact } from "../redux/contacts/operations";
import {
  selectPhonebookIsError,
  selectPhonebookIsLoading,
} from "../redux/contacts/selectors";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import AddContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
//import { selectFiltered } from "../redux/filters/selectors";
//import css from "./ContactsPage.module.css";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiPhonebookContact());
  }, [dispatch]);
  const isErrorPhonebook = useSelector(selectPhonebookIsError);
  const isLoadingPhonebook = useSelector(selectPhonebookIsLoading);
  //const contactsPhonebookList = useSelector(selectPhonebookContacts);
  //const onDeleteButton = (contactId) => {
  //dispatch(apiDeletePhonebookContact(contactId));
  //};
  //const filter = useSelector(selectFiltered);
  //const filteredContacts = useSelector(selectFilteredContacts);
  //const filteredContacts = useMemo(() => {
  //if (!contactsPhonebookList) return [];
  //return contactsPhonebookList.filter((contact) =>
  //contact.name.toLowerCase().includes(filter.toLowerCase())
  //);
  //}, [contactsPhonebookList, filter]);
  return (
    <div>
      <AddContactForm />
      {isLoadingPhonebook && <Loader />}
      {isErrorPhonebook && <ErrorMessage />}
      <ContactList />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
