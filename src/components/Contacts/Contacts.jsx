import { AddForm } from './AddForm';
import List from './List';
import { SearchBar } from './SearchBar';
import s from './Contacts.module.css'; 

const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <AddForm />
            <SearchBar />
            <List />
        </div>
    );
};
export default Contacts;