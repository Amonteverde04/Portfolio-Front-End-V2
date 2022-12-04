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
  const [Loading, setLoading] = useState(false);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const HandleSubmitClick = async () => 
  {
    setLoading(true);
    setMessageSent(true);
    await fetch('https://my-portfolio-back-end-heroku.herokuapp.com/post-feedback',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: 
      {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: FirstName + " " + LastName,
        Email: Email,
        Feedback: Message
      })
    })
    .then((response)=>{
      console.log(response.data);
      setLoading(false);
      setMessageReceived(true);
    })
    .catch((error)=>{
      setLoading(false);
      setMessageReceived(false);
    });

    setTimeout(function(){setMessageSent(false)},8000); // Dismiss alert for 8 seconds
  }

  return (
    <ChakraProvider theme={theme}>
      <Box background={themes.color.bg} color="white">
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
        background="no-repeat url(https://i.imgur.com/kx4gKt9.png)"
        backgroundSize="cover">
          <VStack spacing={50}>
            <Skills/>
            <Socials/>
            <ContactForm HandleSubmitClick={HandleSubmitClick} Loading={Loading} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setMessage={setMessage}/>
            <VStack spacing={0}>
              <p>Copyright © 2022 Alex Monteverde</p>
              <p>All rights reserved</p> 
            </VStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
