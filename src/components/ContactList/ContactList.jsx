import { apiDeletePhonebookContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteButton = (contactId) => {
    dispatch(apiDeletePhonebookContact(contactId));
  };
  //const filter = useSelector(selectFiltered);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
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
    </div>
  );
};

export default ContactList;
