import 
{
  HStack,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

function ProjectCardList()
{
    return(
        <HStack spacing={[3,10]}>
            <ProjectCard 
            CardName="Daniel Mauro Music"
            Href="https://www.danielmauromusic.com/" 
            ImageLink="https://i.imgur.com/ItZr0Kl.png"/>
            <ProjectCard 
            CardName="State Income Tax Calculator Front End"
            Href="https://github.com/Amonteverde04/State-Income-Tax-Calculator"
            ImageLink="https://i.imgur.com/OWTQEOI.png"/>
            <ProjectCard 
            CardName="Farmingdale State College Student Scheduling"
            Href="https://github.com/CDDR1/bcs-426-capstone-oasis"
            ImageLink="https://i.imgur.com/iqGZL3j.png"/>
        </HStack>
    )
};

export default ProjectCardList;