import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Sidebar/>
            <Dashboard/>
        </div>
    );
}

export default App;
