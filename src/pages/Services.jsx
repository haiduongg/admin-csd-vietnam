import { Helmet } from 'react-helmet-async';
import HeadingPage from '../components/HeadingPage';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services Management</title>
      </Helmet>
      <div>
        <HeadingPage title='Services Management' />
      </div>
    </>
  );
}
