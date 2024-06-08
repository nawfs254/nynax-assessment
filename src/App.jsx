import { Link } from 'react-router-dom'
import './App.css'
import Button from './Components/Button'
import Form from './Components/Form'

function App(inputData) {

  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Reservation</h1>
        <Link to="/print"><Button inputData={inputData}></Button></Link>
      </div>
      <Form></Form>
    </div>
  )
}

export default App
