import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
        <h1 className="text-4xl font-bold">
          Wilson Muchiri
        </h1>
        <div className='container bg-slate'>
          <button className='bg-blue-600 p-2 text-2xl m-5' onClick={()=>setCount(count + 1)}>Increment</button>
          <button className='bg-red-600 p-2 text-2xl m-5' onClick={()=>setCount(count - 1)}>Decrement</button>
          <button className='bg-black-600 p-2 text-2xl m-5' onClick={()=>setCount(0)}>Reset</button>
          <p className='text-blue-200 p-5 text-2xl'>Number of times clicked: {count}</p>
        </div>
    </div>
    </>
  )
}

export default App
