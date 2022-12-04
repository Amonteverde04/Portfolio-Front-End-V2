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
        <Grid w={["100%","70%"]}>
            <VStack spacing={0}>
                <Text fontSize={[25,35]}>Skills</Text>
                <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 9.2em)"]}>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>Javascript</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>React</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>C#</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>Blazor</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>Node.js</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>Next.js</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>C++</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>ChakraUI</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>Python</Text>                        
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>MudBlazor</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>HTML</Text>
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>CSS</Text>
                    </GridItem>
                    <GridItem textAlign="left">
                        <Text fontSize={[15,20]}>SQL</Text>
                    </GridItem>
                    <GridItem textAlign="right">
                        <Text fontSize={[15,20]}>MongoDB</Text>
                    </GridItem>
                </Grid>
            </VStack>
        </Grid>
    );
};

export default Skills;