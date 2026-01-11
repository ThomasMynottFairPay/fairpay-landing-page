import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/churches" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="/churches" replace />} />
        {/* Catch all other routes and redirect to /churches */}
        <Route path="*" element={<Navigate to="/churches" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
