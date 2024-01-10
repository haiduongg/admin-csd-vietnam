import { Route, Routes, useLocation } from 'react-router';

import { useLayoutEffect } from 'react';
import Dashboard from './pages/Dashboard';

export default function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id='page' className='dark:bg-black-900 dark:text-black-none'>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </div>
  );
}
