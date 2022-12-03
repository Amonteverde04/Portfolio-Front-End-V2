import React from 'react';
import 
{
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
} from '@chakra-ui/react';
import NameAndTitle from './Components/NameAndTitle';
import ProfileImage from './Components/ProfileImage';
import Experience from './Components/Experience';
import ProjectCardList from './Components/ProjectCardList';
import Skills from './Components/Skills';

const themes = 
{
  color: {
    bg: "#050505"
  }
};

const theme = extendTheme({themes});

function App() 
{
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" background={themes.color.bg}>
        <Grid minH="100vh" paddingTop={50} paddingBottom={50}>
          <VStack spacing={50}>
            <NameAndTitle/>
            <ProfileImage/>
            <Experience/>
            <ProjectCardList/>
          </VStack>
        </Grid>
      </Box>
      <Box textAlign="center" fontSize="xl" background="red">
        <Grid minH="100vh" paddingTop={50} paddingBottom={50}>
          <VStack spacing={50}>
            <Skills/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
