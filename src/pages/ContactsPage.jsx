import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiDeletePhonebookContact,
  apiPhonebookContact,
} from "../redux/contactss/operations";
import {
  selectPhonebookContacts,
  selectPhonebookIsError,
  selectPhonebookIsLoading,
} from "../redux/contactss/selectors";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiPhonebookContact());
  }, [dispatch]);
  const isErrorPhonebook = useSelector(selectPhonebookIsError);
  const isLoadingPhonebook = useSelector(selectPhonebookIsLoading);
  const contactsPhonebookList = useSelector(selectPhonebookContacts);
  const onDeleteButton = (contactId) => {
    dispatch(apiDeletePhonebookContact(contactId));
  };
  return (
    <div>
      <AddContactForm />
      {isLoadingPhonebook && <Loader />}
      {isErrorPhonebook && <ErrorMessage />}
      <ul>
        {Array.isArray(contactsPhonebookList) &&
          contactsPhonebookList.length === 0 && (
            <li>you don&apost have any contacts yet!</li>
          )}
        {Array.isArray(contactsPhonebookList) &&
          contactsPhonebookList.map((item) => (
            <li key={item.id}>
              <h3>name:{item.name}</h3>
              <p>number:{item.number}</p>
              <button onClick={() => onDeleteButton(item.id)} type="button">
                Delete
              </button>
            </li>
          ))}
      </ul>
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
