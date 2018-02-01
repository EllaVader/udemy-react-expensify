// take all the named exports from firebase and stick them on the variable firebase
// then you can reference them as firebase.<blah>
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQJiF4HFfJFTh-wz91cKhjDTm1gGXpkXE",
  authDomain: "expensify-9d03f.firebaseapp.com",
  databaseURL: "https://expensify-9d03f.firebaseio.com",
  projectId: "expensify-9d03f",
  storageBucket: "expensify-9d03f.appspot.com",
  messagingSenderId: "518307656925"
};

firebase.initializeApp(config);
const database = firebase.database();
// ref is like a "table" in a sql db
// if you don't pass anything in you set your object on the root
// set can take in any javascript type as well as an object.
database.ref().set({
  name: 'Janine Roe',
  age: 49,
  isSingle: false,
  location: {
    city: 'Glenmoore',
    country: 'United States'
  },
  
})

// calling in set will overwrite what was currently at the root.
//database.ref().set('This is my data');

// you can update a value in the object by passing in the property you want to change
database.ref('age').set(50);
// updating a nested property
database.ref('location/city').set('Exton');

// set up a new root child 'attributes' and provide some properties
database.ref('attributes').set({
  height: 64,
  weight: 140
});
