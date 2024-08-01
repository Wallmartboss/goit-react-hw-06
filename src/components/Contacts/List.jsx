import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import { deleteContacts } from '../../redux/contactsSlice';


export const List = () => {
    const contacts = useSelector(selectContacts);
    // const filter = useSelector(selectNameFilter);

    const dispatch = useDispatch();

    // const filteredData = contacts.filter(item => {
    //     console.log(item);
    //     item.toLowerCase().includes(filter.toLowerCase())
    // });

    // console.log(filteredData());

    console.log( contacts );
  return (
      <ul>
{/*           
      {contacts.map(item => (
        <li key={item.id}> */}
          <li>
          <p>{contacts.name}</p>
          <button onClick={() => dispatch(deleteContacts(contacts.id))}>Delete</button>
        </li>
      {/* ))} */}
    </ul>
  );
};
