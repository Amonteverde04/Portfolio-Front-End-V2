import 
{
  Image,
  Card,
  Tooltip,
} from '@chakra-ui/react';

function ProjectCard(props)
{
    return(
        <a href={props.Href}>
            <Tooltip label={props.CardName} bg="#050505" color="white">
                <Card overflow="hidden" w={[90, 170, 200]} h={[150, 240, 270]}>
                        <Image
                        width="100%" 
                        height="100%" 
                        src={props.ImageLink}/>
                </Card>
            </Tooltip>
        </a>
    )
};

export default ProjectCard;