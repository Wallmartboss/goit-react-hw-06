import { Field, Form, Formik } from 'formik';
import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContacts } from '../../redux/contactsSlice';

export const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = { contact: '' };

  const onSubmit = (values, options) => {
    const newItem = { contact: values.contact, id: nanoid() };
console.log(newItem);
      dispatch(addContacts(newItem));
      console.log(contacts);
      
    options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='contact' placeholder='Enter new contact' />
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
