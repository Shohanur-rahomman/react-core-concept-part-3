
import './App.css'

import React, { Suspense } from 'react';
// import Posts from './components/Posts';
import Users from './components/Users';

// const fetchData = fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json());

const users =async()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
  }

function App() {
  const usersData = users();
 

  return (
    <>
      <Suspense fallback={<h2>loading .....</h2>}>
        <Users usersData={usersData}></Users>
    </Suspense>
      <h1 className='text-red'>Vite + React</h1>
      {/* <Suspense fallback={<h2>data Loading......</h2>}>
        <Posts fetchData={fetchData}></Posts>
      </Suspense> */}
      
    </>
  )
}

export default App
