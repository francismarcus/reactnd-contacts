import React from 'react'
import PropTypes from 'prop-types'

const ListContacts = (props) => {
    return(
        <ol className = 'contact-list' >
        {props.contacts.map((contact) => (
            <li className='contact-list-item'>
                <div className='contact-avatar'
                style={{background: `url(${contact.avatarURL})`}}>
                </div>
                <div className='contact-details'>
                <p>{contact.name}</p>
               <p>{contact.handle}</p>
               </div>
               <button 
                onClick={() => props.onDeleteContact(contact)}
                className='contact-remove'>
                    Remove
                 </button>
            </li>
            ))}
         </ol>

    )
}


// PropTypes is a great way to validate intended data types in our React app.
// Type checking our data with PropTypes helps us identify these bugs during development to ensure a smooth experience for our app's users.
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }
  
export default ListContacts