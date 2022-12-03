import 
{
  VStack,
  Grid,
  Image,
} from '@chakra-ui/react';
import AVILogo from '../Assets/avi-logo.png';
import DMMLogo from '../Assets/daniel-mauro-music.png';

function Experience()
{
    return(
        <Grid>
            <VStack spacing={0}>
                <a href='https://www.avi.com/'>
                    <Image src={AVILogo}/>
                </a>
                <a href='https://www.danielmauromusic.com/'>
                    <Image src={DMMLogo}/>
                </a>
            </VStack>
        </Grid>
    );
};

export default Experience;