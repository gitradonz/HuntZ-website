import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBULnaTFoPIpwihrxxJlytUZy9gjOGlAOY',
  authDomain: 'proyecto-huntzinfo.firebaseapp.com',
  databaseURL:
    'https://proyecto-huntzinfo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'proyecto-huntzinfo',
  storageBucket: 'proyecto-huntzinfo.appspot.com',
  messagingSenderId: '541336169122',
  appId: '1:541336169122:web:27d38a905891dc677845fb',
}

initializeApp(firebaseConfig)
const db = getDatabase()
const dbRef = ref(db)

export { db, dbRef }
