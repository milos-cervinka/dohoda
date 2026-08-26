import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './assets/components/login';
import Register from './assets/components/register';
import Home from './assets/components/home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404: Stránka nenalezena</h1>} />
      </Routes>
    </BrowserRouter>
  );
}