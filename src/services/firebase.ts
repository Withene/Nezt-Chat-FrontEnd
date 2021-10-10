import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAAu7o7l1JwARnyj_4r9Lz6a_7a0ljprs8',
  authDomain: 'withene-51488.firebaseapp.com',
  databaseURL: 'https://withene-51488-default-rtdb.firebaseio.com',
  projectId: 'withene-51488',
  storageBucket: 'withene-51488.appspot.com',
  messagingSenderId: '154384272731',
  appId: '1:154384272731:web:cb33c5955220597d961e7e',
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
