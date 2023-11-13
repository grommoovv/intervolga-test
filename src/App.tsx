import { Routes, Route, Link } from 'react-router-dom'
import './styles/index.css'
import { GirdTask } from './components/GirdTask'
import { FormTask } from './components/FormTask'

const App = () => {
  return (
    <>
      <nav style={{ position: 'fixed', right: 0, display: 'flex', gap: 20 }}>
        <Link to={'/grid'}>Grid Task</Link>
        <Link to={'/form'}>Form Task</Link>
      </nav>
      <Routes>
        <Route path='/grid' element={<GirdTask />} />
        <Route path='/form' element={<FormTask />} />
      </Routes>
    </>
  )
}

export { App }
