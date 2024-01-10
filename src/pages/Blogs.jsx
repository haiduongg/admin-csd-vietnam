import { Helmet } from 'react-helmet-async';
import HeadingPage from '../components/HeadingPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableBlogs from '../components/TableBlogs';
import { Box, Button, Flex } from '@chakra-ui/react';

export default function Blogs() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const API_URL = 'https://api-csd-vietnam.onrender.com/api/v1/blog';

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL);
      setBlogs(response.data);
      setIsLoading(true);
    };
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blogs Management</title>
      </Helmet>
      <Box px={3}>
        <HeadingPage title='Blogs Management' />
        <Flex mt={10} mb={7} justifyContent='flex-end' pr={10}>
          <Button colorScheme='teal'>Create New Post</Button>
        </Flex>
        <Box pr={3}>
          <TableBlogs blogs={blogs} isLoading={isLoading} />
        </Box>
      </Box>
    </>
  );
}
