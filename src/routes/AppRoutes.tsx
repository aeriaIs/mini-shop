import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}