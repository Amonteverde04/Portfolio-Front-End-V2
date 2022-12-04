import 
{
  Image,
  Card,
} from '@chakra-ui/react';

function ProjectCard(props)
{
    return(
        <Card overflow="hidden">
            <a href={props.Href}>
                <Image src={props.ImageLink}/>
            </a>
        </Card>
    )
};

export default ProjectCard;