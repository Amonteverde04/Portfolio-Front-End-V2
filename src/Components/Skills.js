import 
{
    VStack,
    Grid,
    Text,
    GridItem,
} from '@chakra-ui/react';

function Skills()
{
    return(
        <Grid>
            <VStack spacing={0}>
                <Text fontSize="25">Skills</Text>
                <Grid templateColumns="repeat(2, 1fr)">
                    <GridItem textAlign="left">
                        <Text fontSize="15">Javascript</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">React</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">C#</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">Blazor</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">Node.js</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">Next.js</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">C++</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">ChakraUI</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">Python</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">MudBlazor</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">HTML</Text>
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">CSS</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize="15">SQL</Text>
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize="15">MongoDB</Text>
                    </GridItem>
                </Grid>
            </VStack>
        </Grid>
    );
};

export default Skills;