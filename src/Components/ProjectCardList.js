import 
{
  HStack,
  Grid,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

function ProjectCardList()
{
    return(
        <Grid>
            <HStack spacing={3}>
                <ProjectCard 
                Href="https://github.com/Amonteverde04?tab=repositories&q=&type=public&language=&sort=" 
                ImageLink="https://i.imgur.com/gqT5W96.png"/>
                <ProjectCard 
                Href="https://github.com/Amonteverde04/State-Income-Tax-Calculator"
                ImageLink="https://i.imgur.com/ZuBQE4O.png"/>
                <ProjectCard 
                Href="https://github.com/CDDR1/bcs-426-capstone-oasis"
                ImageLink="https://i.imgur.com/dnfalcI.png"/>
            </HStack>
        </Grid>
    )
};

export default ProjectCardList;