import { Helmet } from 'react-helmet-async';
import HeadingPage from '../components/HeadingPage';

export default function Categories() {
  return (
    <>
      <Helmet>
        <title>Categories Management</title>
      </Helmet>
      <div>
        <HeadingPage title='Categories Management' />
      </div>
    </>
  );
}
