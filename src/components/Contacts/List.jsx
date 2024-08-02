import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import s from './Contacts.module.css'


const List = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const dispatch = useDispatch();

    const filteredData = contacts.filter(item => item.contact.toLowerCase().includes(filter.toLowerCase()));

  return (
      <ul>
       {filteredData.map(item => (
        <li key={item.id} className={s.list}>
          <p className={s.name}>{item.contact}</p>
           <button className={s.btn} onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
};

export default List;