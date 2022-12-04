import 
{
    HStack,
    Image,
} from '@chakra-ui/react';
import LinkedIn from '../Assets/linkedin.png'
import GitHub from '../Assets/github.png'

function Socials()
{
    return(
        <HStack spacing={12}>
            <a href='https://github.com/Amonteverde04'>
                <Image src={GitHub}/>
            </a>
            <a href='https://www.linkedin.com/in/alex-monteverde-a83146195/'>
                <Image src={LinkedIn}/>
            </a>
        </HStack>
    )
}

export default Socials;