import { Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <div>
        <Heading>Dashboard Page</Heading>
      </div>
    </div>
  );
}

export default Dashboard;
