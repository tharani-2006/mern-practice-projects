import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import ViewBook from './pages/ViewBooks'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ViewBook />} />
        <Route path="/add" element={ <AddBook />} />
        <Route path="/update/:id" element={ <EditBook />} />
      </Routes>
    </Router>
  )
}

export default App
