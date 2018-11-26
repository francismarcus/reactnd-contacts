import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }

    state = {
        query: ''    
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {
        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state)}


            <div className='list-contacts-top'>

                <input 
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    value={this.state.query}
                    onChange={(event)=> this.updateQuery(event.target.value)}
                />
            </div>

            <ol className = 'contact-list' >
            {this.props.contacts.map((contact) => (
                <li className='contact-list-item'>
                    <div className='contact-avatar'
                         style={{background: `url(${contact.avatarURL})`}}>
                    </div>
                    <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                    </div>
                    <button 
                        onClick={() => this.props.onDeleteContact(contact)}
                        className='contact-remove'>
                        Remove
                    </button>
                </li>
                ))}
             </ol>                
            </div>
        )
    }
}

// PropTypes is a great way to validate intended data types in our React app.
// Type checking our data with PropTypes helps us identify these bugs during development to ensure a smooth experience for our app's users.

  
export default ListContacts