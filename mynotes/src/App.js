import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' component={NotesPage} exact />
      </div>
    </Router>
  );
}

export default App;
