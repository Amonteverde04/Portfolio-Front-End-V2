import 
{ 
    Avatar,
    Box
} from "@chakra-ui/react";
import HeadShot from '../Assets/HeadShot.jpg'

function ProfileImage()
{
    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={[150, 300]}
        h={[150, 300]}>
            <Avatar size={["2xl"]} w={["100%"]} h={["100%"]} src={HeadShot}/>
        </Box>
    );
};

export default ProfileImage;