import React from 'react';
import 
{
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
  Slide,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import NameAndTitle from './Components/NameAndTitle';
import ProfileImage from './Components/ProfileImage';
import Experience from './Components/Experience';
import ProjectCardList from './Components/ProjectCardList';
import Skills from './Components/Skills';
import Socials from './Components/Socials';
import ContactForm from './Components/ContactForm';
import { useState } from 'react';

const themes = 
{
  color: {
    bg: "#050505"
  }
};

const theme = extendTheme({themes});

function App() 
{
  const [messageReceived, setMessageReceived] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const HandleSubmitClick = () => 
  {
      setMessageSent(true);
      // await the response from the server
      setMessageReceived(false);

      setTimeout(function(){setMessageSent(false)},8000);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box background={themes.color.bg}>
        <Grid
        paddingTop={50}
        paddingBottom={50}
        paddingLeft={30}
        paddingRight={30}
        background="no-repeat url(https://i.imgur.com/Cxo025R.png)"
        backgroundSize="cover">
          {
                messageReceived && messageSent &&
                <Slide in style={{ zIndex: 10 }}>
                    <Alert 
                    status="success" 
                    variant="solid"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"> 
                        <AlertIcon/>
                        Your message was successfully transmitted to the server!
                    </Alert>
                </Slide>
            }
            {
                !messageReceived && messageSent &&
                <Slide in style={{ zIndex: 10 }}>
                    <Alert 
                    status="error" 
                    variant="solid"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"> 
                        <AlertIcon/>
                        Unfortunately, your message was not transmitted to the server. Please try again later.
                    </Alert>
                </Slide>
            }
          <VStack spacing={50}>
            <NameAndTitle/>
            <ProfileImage/>
            <Experience/>
            <ProjectCardList/>
          </VStack>
        </Grid>
        <Grid 
        paddingBottom={50} 
        paddingLeft={30}
        paddingRight={30}
        background="no-repeat url(https://i.imgur.com/sgFzm14.png)"
        backgroundSize="cover">
          <VStack spacing={50}>
            <Skills/>
            <Socials/>
            <ContactForm HandleSubmitClick={HandleSubmitClick}/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
