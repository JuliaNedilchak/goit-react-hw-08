import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../redux/auth/operations";

const LoginUserSchema = Yup.object({
  email: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
  password: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
});

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    //const newList = {
    //...values,
    //id: nanoid(),
    // };
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
    // onAddContact(formData);
    //event.currentTarget.reset();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={submitForm}
        validationSchema={LoginUserSchema}
      >
        <Form>
          <h2>Login </h2>

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
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
