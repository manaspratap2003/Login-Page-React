import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Details   from './Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<LoginForm />} />
        <Route path="/details" element={<Details   />} />
      </Routes>
    </Router>
  );
}

export default App;
