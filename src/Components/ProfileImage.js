import 
{ 
    Avatar 
} from "@chakra-ui/react";
import HeadShot from '../Assets/HeadShot.jpg'

function ProfileImage()
{
    return(
        <Avatar size='2xl' src={HeadShot}/>
    );
};

export default ProfileImage;