import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Flex,
  SkeletonText,
  Text,
  Skeleton,
  Button,
  Spacer,
  Tag,
  HStack,
} from '@chakra-ui/react';
import { Delete, Edit, View } from '../../data/icon';

TableBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default function TableBlogs({ blogs, isLoading }) {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr className='grid grid-cols-14'>
            <Th className='col-span-1' textAlign='center'>
              ID
            </Th>
            <Th className='col-span-2' textAlign='center'>
              Thumbnail
            </Th>
            <Th className='col-span-3' textAlign='center'>
              Title
            </Th>
            <Th className='col-span-4' textAlign='center'>
              Description
            </Th>
            <Th className='col-span-2' textAlign='center'>
              Tag
            </Th>
            <Th className='col-span-2' textAlign='center'>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading &&
            blogs?.map((item, index) => (
              <Tr key={index} className='grid grid-cols-14'>
                <Td whiteSpace='break-spaces' className='col-span-1'>
                  {item._id}
                </Td>
                <Td className='col-span-2'>
                  <Image
                    src={item.thumbnail}
                    alt={`Image ${item.title}`}
                    className='aspect-video'
                    width={500}
                  />
                </Td>
                <Td whiteSpace='break-spaces' className='col-span-3'>
                  <Text className='leading-normal text-2xl font-bold'>
                    {item.title}
                  </Text>
                </Td>
                <Td whiteSpace='break-spaces' className='col-span-4'>
                  {item.description}
                </Td>
                <Td whiteSpace='pre-wrap' className='col-span-2'>
                  <HStack as={'ul'} spacing={4}>
                    {item.tag &&
                      item.tag.map((itemTag, index) => (
                        <Tag
                          size={'md'}
                          key={index}
                          variant='solid'
                          colorScheme='orange'
                        >
                          #{itemTag}
                        </Tag>
                      ))}
                  </HStack>
                </Td>
                <Td whiteSpace='pre-wrap' className='col-span-2'>
                  <Flex mt={5} px={5}>
                    <Button colorScheme='blue' p={1}>
                      <View />
                    </Button>
                    <Spacer />
                    <Button colorScheme='yellow' p={1}>
                      <Edit />
                    </Button>
                    <Spacer />
                    <Button colorScheme='red' p={1}>
                      <Delete />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}

          {!isLoading &&
            new Array(5).fill(0)?.map((item, index) => (
              <Tr key={index} className='grid grid-cols-14'>
                <Td className='col-span-1'>
                  <SkeletonText noOfLines={1} skeletonHeight='2' />
                </Td>
                <Td className='col-span-2'>
                  <Skeleton width={200} className='aspect-video' />
                </Td>
                <Td whiteSpace='break-spaces' className='col-span-3'>
                  <SkeletonText noOfLines={2} skeletonHeight='4' spacing={4} />
                </Td>
                <Td whiteSpace='break-spaces' className='col-span-4'>
                  <SkeletonText noOfLines={2} skeletonHeight='2' spacing={2} />
                </Td>
                <Td whiteSpace='pre-wrap' className='col-span-2'>
                  <SkeletonText noOfLines={1} skeletonHeight='4' />
                </Td>
                <Td className='col-span-2'></Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
