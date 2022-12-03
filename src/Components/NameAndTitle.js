import 
{
    VStack,
    Grid,
    Text,
} from '@chakra-ui/react';

function NameAndTitle()
{
    return(
        <Grid>
            <VStack spacing={0}>
                <Text fontSize="25">Alex Monteverde</Text>
                <Text fontSize="15">Software Engineer</Text>
            </VStack>
        </Grid>
    );
};

export default NameAndTitle;