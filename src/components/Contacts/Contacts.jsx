import ContactsForm from './ContactsForm';
import Contact from './Contact';
import SearchBox from './SearchBox';
import s from './Contacts.module.css'; 

const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <ContactsForm />
            <SearchBox />
            <Contact />
        </div>
    );
};
export default Contacts;