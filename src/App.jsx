
import { Suspense } from 'react';
import './App.css'
import Count from './components/Count'
import ShowHide from './components/ShowHide'
import AllMens from './components/allMens';


import Posts from './components/Posts';
import Users from './components/Users';

const fetchData = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json());

const users = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

const allDataMane = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const usersData = users();
  const allData = allDataMane()


  return (
    <>

      
      <h1 className='text-red'>Vite + React</h1>
      <Suspense fallback={<h2>loading .....</h2>}>
        <Users usersData={usersData}></Users>
      </Suspense>

      <Suspense fallback={<h2>data loading......</h2>}>
        <AllMens allData={allData}></AllMens>
      </Suspense>

      <Count></Count>

      <ShowHide></ShowHide>

      <Suspense fallback={<h2>data Loading......</h2>}>
        <Posts fetchData={fetchData}></Posts>
      </Suspense>

    </>
  )
}

export default App
