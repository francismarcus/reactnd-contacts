import React, { Component } from 'react';
import ListContacts from './ListContacts'

// Default contacts, remove later.
const contacts = [
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
  }
 ];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
