import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export default function HeadingPage({ title }) {
  return (
    <>
      <Heading as='h1' size={'lg'} lineHeight={'72px'}>
        {title}
      </Heading>
    </>
  );
}

HeadingPage.propTypes = {
  title: PropTypes.string.isRequired,
};
