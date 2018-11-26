import React, { Component } from 'react';
import ListContacts from './ListContacts'

// Default state, remove later.


class App extends Component {
  state = {
    contacts: [
    {
     "id": "Salmon",
      "name": "Salmon & Coral",
      "handle": "@Snapchat",
     "avatarURL": "http://localhost:5001/salmoncoral.png"
    },
    {
     "id": "Celery",
      "name": "Mr. Celery",
      "handle": "@Celerysquash",
     "avatarURL": "http://localhost:5001/celery.jpg"
    },
    {
      "id": "Grey",
     "name": "Mr. Grey",
      "handle": "@Sage",
      "avatarURL": "http://localhost:5001/grey.jpg"
      },
    ]
  }


//  Hook up delete button with onDeleteContact function
removeContact = (contact) => {
  this.setState((currentState) => ({
    contacts: currentState.contacts.filter((c) => {
      return c.id !== contact.id
    })
  }))
}

  render() {
    return (
      <div>
        <ListContacts
         contacts={this.state.contacts}
         onDeleteContact={this.removeContact}
         
          />
      </div>
    );
  }
}

export default App;
