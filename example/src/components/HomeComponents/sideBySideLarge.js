import React from 'react';
import { Flex, Button, Text, Box, Heading } from 'theme-ui';
import CloudinaryImage from '../Images/cloudinaryImage';

const sideBySideLarge = () => {
  return (
    <Box sx={{ paddingX: 4, paddingY: 6 }}>
      <Flex sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Box sx={{ width: ['100%', '50%'], padding: 3 }}>
          <Box sx={{ maxWidth: 600, margin: 'auto' }}>
            <Heading as='h3' sx={{ fontSize: 6, mb: 3 }}>
              Lorem ipsum dolor sit{' '}
            </Heading>
            <Text as='p' sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit
              eum atque exercitationem delectus ipsa veritatis deserunt
              doloremque laudantium vero reiciendis per
            </Text>
            <Button
              sx={{
                '&:hover': {
                  color: 'text',
                },
              }}>
              CTA Button
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: ['100%', '50%'] }}>
          <CloudinaryImage
            imageName={`sites/ponza/ponza-index-1`}
            maxWidth={800}
            width={'100%'}></CloudinaryImage>
        </Box>
      </Flex>
    </Box>
  );
};

export default sideBySideLarge;
