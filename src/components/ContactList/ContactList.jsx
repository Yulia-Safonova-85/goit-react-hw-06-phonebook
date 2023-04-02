import { useSelector } from "react-redux";
import { ContactsItem } from "components/ContactsItem/ContactsItem"; 
import { getContacts, getFilter} from "redux/selectors";
import { List } from "./ContactList.styled";

export const ContactList = () => {
  
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);

    const findContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
        }
     
    const findFilterContacts = findContact();

    return (
        <div>
            <List>
                {findFilterContacts.map(contact => {
                    return (
                    <ContactsItem key ={contact.id} contact={contact}/>)
                }
                )}
            </List>
        </div>
    )
}