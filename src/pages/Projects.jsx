import { Helmet } from 'react-helmet-async';
import HeadingPage from '../components/HeadingPage';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects Management</title>
      </Helmet>
      <div>
        <HeadingPage title='Projects Management' />
      </div>
    </>
  );
}
