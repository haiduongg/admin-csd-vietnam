import { Helmet } from 'react-helmet-async';
import HeadingPage from '../components/HeadingPage';

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <div>
        <HeadingPage title='Dashboard' />
      </div>
    </>
  );
}

export default Dashboard;
