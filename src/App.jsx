import { Route, Routes, useLocation } from 'react-router';
import { useLayoutEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Categories from './pages/Categories';
import Blogs from './pages/Blogs';

export default function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id='page' className='bg-dark text-white'>
      <Grid className='grid-cols-14 max-h-screen bg-black-900' gap={10}>
        <GridItem colSpan={1} className='bg-black-800 overflow-y-hidden'>
          <Sidebar />
        </GridItem>
        <GridItem
          as={'article'}
          colSpan={13}
          className='min-h-screen max-h-screen overflow-y-auto pb-10'
        >
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/services' element={<Services />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}
