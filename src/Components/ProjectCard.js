import 
{
  Image,
  Card,
} from '@chakra-ui/react';

function ProjectCard(props)
{
    return(
        <a href={props.Href}>
            <Card overflow="hidden" w={[90, 170, 200]} h={[150, 240, 270]}>
                    <Image
                    width="100%" 
                    height="100%" 
                    src={props.ImageLink}/>
            </Card>
        </a>
    )
};

export default ProjectCard;