import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiDeletePhonebookContact,
  apiPhonebookContact,
} from "../redux/contacts/operations";
import {
  selectPhonebookContacts,
  selectPhonebookIsError,
  selectPhonebookIsLoading,
} from "../redux/contacts/selectors";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectFiltered } from "../redux/filters/selectors";
import css from "./ContactsPage.module.css";

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
  const filter = useSelector(selectFiltered);

  const filteredContacts = useMemo(() => {
    if (!contactsPhonebookList) return [];
    return contactsPhonebookList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contactsPhonebookList, filter]);
  return (
    <div>
      <AddContactForm />
      {isLoadingPhonebook && <Loader />}
      {isErrorPhonebook && <ErrorMessage />}
      <ul>
        {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
          <li>you dont have any contacts yet!</li>
        )}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((item) => (
            <li className={css.contactItem} key={item.id}>
              <p>name:{item.name}</p>
              <p>number:{item.number}</p>
              <button
                className={css.button}
                onClick={() => onDeleteButton(item.id)}
                type="button"
              >
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
