/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Box, Flex, Image } from 'theme-ui';
import { useThemeUI } from 'theme-ui';

import Logo from '../../../assets/logo.png';

const Navigation = ({ data }) => {
  const context = useThemeUI();

  const {
    theme: { colors },
  } = context;
  const pageData = data.data.allPageDataYaml.edges;
  const {
    name,
    avatar: { imageBaseUrl, imagePrefix },
  } = data.data.businessData;
  const avatarURL = `${imageBaseUrl}/${imagePrefix}`;

  const renderNavLinks = () =>
    pageData.map(({ node }) => (
      <Link
        activeStyle={{ color: colors.primary }}
        to={node.page.path}
        sx={{
          color: 'white',
          fontSize: 3,
          display: 'inline-block',
          marginX: 3,
          textTransform: 'uppercase',
        }}>
        {node.page.title}
      </Link>
    ));

  return (
    <Box as='nav' sx={{ background: 'black', padding: 5 }}>
      <Flex sx={{ justifyContent: 'center' }}>
        <Image
          sx={{ maxWidth: ['200px', '310px'] }}
          src={Logo || avatarURL}
          alt={name}></Image>
      </Flex>
      <Flex sx={{ justifyContent: 'center', mt: 5 }}>{renderNavLinks()}</Flex>
    </Box>
  );
};

export default Navigation;
