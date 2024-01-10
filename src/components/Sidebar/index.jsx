import { Box, Flex, Heading, Switch } from '@chakra-ui/react';
import {
  SolarCupFirstBroken,
  SolarLayersMinimalisticBroken,
  SolarGalleryRoundBroken,
  SolarNotebookBroken,
} from '../../data/icon';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const sidebarMenu = [
    { title: 'Projects', icon: SolarCupFirstBroken, link: '/projects' },
    {
      title: 'Services',
      icon: SolarLayersMinimalisticBroken,
      link: '/services',
    },
    { title: 'Categories', icon: SolarGalleryRoundBroken, link: '/categories' },
    { title: 'Blogs', icon: SolarNotebookBroken, link: '/blogs' },
  ];
  return (
    <div className='h-full'>
      <Box className='w-full h-[72px]' mx={'auto'}>
        <Link to={'/'}>
          <Heading as='h1' textAlign={'center'} lineHeight={'72px'}>
            CSD
          </Heading>
        </Link>
      </Box>
      <Flex
        as={'ul'}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        gap={14}
        className='h-[calc(100%-122px)]'
        my={'auto'}
      >
        {sidebarMenu?.map((item, index) => (
          <li key={index} title={item.title}>
            <Link to={item.link} className='text-white'>
              <item.icon />
            </Link>
          </li>
        ))}
      </Flex>
      <Flex justifyContent='center'>
        <Switch size='lg' />
      </Flex>
    </div>
  );
}
