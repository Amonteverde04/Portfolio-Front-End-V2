import 
{
    VStack,
    Grid,
    Text,
    List,
    ListItem,
    HStack,
} from '@chakra-ui/react';

function Skills()
{
    return(
        <Grid>
            <VStack spacing={0}>
                <Text fontSize="25">Skills</Text>
                <List>
                    <ListItem>
                        <HStack spacing={5}>
                            <Text fontSize="15">Javascript</Text>
                            <Text fontSize="15">React</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack spacing={5}>
                            <Text fontSize="15">C#</Text>
                            <Text fontSize="15">Blazor</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack spacing={5}>
                            <Text fontSize="15">Node.js</Text>
                            <Text fontSize="15">Next.js</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack spacing={5}>
                            <Text fontSize="15">HTML</Text>
                            <Text fontSize="15">ChakraUI</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack spacing={5}>
                            <Text fontSize="15">CSS</Text>
                            <Text fontSize="15">MudBlazor</Text>
                        </HStack>
                    </ListItem>
                    
                </List>
            </VStack>
        </Grid>
    );
};

export default Skills;