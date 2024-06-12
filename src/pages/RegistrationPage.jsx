import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../redux/auth/operations";

const registerUserSchema = Yup.object({
  name: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .max(38, "максимальна кількість символів - 50")
    .min(3, "мінімальна кількість символів - 3"),
  email: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
  password: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    //const newList = {
    //...values,
    //id: nanoid(),
    // };
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
    // onAddContact(formData);
    //event.currentTarget.reset();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={submitForm}
        validationSchema={registerUserSchema}
      >
        <Form>
          <h2>Registration </h2>
          <label>
            <span>Name:</span>
            <br />
            <Field type="text" name="name" />
            <ErrorMessage component="p" name="name" />
          </label>
          <br />
          <label>
            <span>Email:</span>
            <br />
            <Field type="email" name="email" />
            <ErrorMessage component="p" name="email" />
          </label>
          <br />
          <label>
            <span>Password:</span>
            <br />
            <Field type="password" name="password" />
            <ErrorMessage component="p" name="password" />
          </label>
          <br />
          <button type="submit">Create new user</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
