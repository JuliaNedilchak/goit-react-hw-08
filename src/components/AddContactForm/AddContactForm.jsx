import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";
import { apiAddPhonebookContact } from "../../redux/contactss/operations";
import { useDispatch } from "react-redux";

const addPhonebookContactSchema = Yup.object({
  name: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .max(50, "максимальна кількість символів - 50")
    .min(3, "мінімальна кількість символів - 3"),
  number: Yup.number()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};
const AddContactForm = () => {
  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    //const newList = {
    //...values,
    //id: nanoid(),
    // };

    dispatch(apiAddPhonebookContact(values));
    actions.resetForm();
    // onAddContact(formData);
    //event.currentTarget.reset();
  };
  return (
    <div>
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={submitForm}
          validationSchema={addPhonebookContactSchema}
        >
          <Form>
            <label>
              <span>Name</span>
              <br />
              <Field type="text" name="name" />
              <ErrorMessage component="p" name="name" />
            </label>
            <br />
            <label>
              <span>Number</span>
              <br />
              <Field type="number" name="number" />
              <ErrorMessage component="p" name="number" />
            </label>
            <br />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddContactForm;
