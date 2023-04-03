import { Link } from 'react-router-dom'
// CSS
import './css/navbar.css'

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-section">
                    <h1>Currency conversion</h1>
                    <div className="links">
                        <Link to='/list' className='currency list'>List</Link>
                        <Link to='/' className='currency converter'>Converter</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}