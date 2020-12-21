import React from 'react';
import { Box, Flex, Image, Text } from 'theme-ui';

import { GoHome } from 'react-icons/go';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { AiOutlinePhone, AiOutlineMenu } from 'react-icons/ai';
import { BiSubdirectoryLeft } from 'react-icons/bi';

const MobileBottomNav = ({
  icons = [
    {
      text: 'Go Home',
      ico: size => <GoHome size={true && size} />,
    },
    {
      text: 'Menu',
      ico: size => <GiForkKnifeSpoon size={true && size} />,
    },
    {
      text: 'Call',
      ico: size => <AiOutlinePhone size={true && size} />,
    },
    {
      text: 'Directions',
      ico: size => <BiSubdirectoryLeft size={true && size} />,
    },
    {
      text: 'Other Options',
      ico: size => <AiOutlineMenu size={true && size} />,
    },
  ],
}) => {
  const renderIcons = () =>
    icons.map(({ ico, text }) => (
      <Flex sx={{ padding: 3, flex: 1, justifyContent: 'center' }}>
        {ico(30)}
      </Flex>
    ));
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 9999,
        width: '100%',
        boxShadow: '0 5px 30px rgba(0,0,0,.2)',
        background: 'white',
      }}>
      <Flex>{renderIcons()}</Flex>
    </Box>
  );
};

export default MobileBottomNav;
