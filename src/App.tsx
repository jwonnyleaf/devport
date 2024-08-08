import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import CV from './components/CV/CV'

const App: React.FC = () => {
    return (
        <Router>
            <div className='flex bg-background'>
                <Sidebar />
                <div className='flex-grow p-4'>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/cv' element={<CV />} />
                        /* Redirect all other routes to the root */
                        <Route path='*' element={<Landing />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
