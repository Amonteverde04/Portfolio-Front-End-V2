import 
{
    HStack,
    Box,
    Stack,
    Input,
    Textarea,
    Text,
    Button,
} from '@chakra-ui/react';

function ContactForm(props)
{
    return(
        <Stack>
            <Text fontSize="25">Let's get in contact!</Text>
            <HStack>
                <Box>
                    <Text fontSize="15" textAlign="left">First Name</Text>
                    <Input isRequired/>
                </Box>
                <Box>
                    <Text fontSize="15" textAlign="left">Last Name</Text>
                    <Input isRequired/>
                </Box>
            </HStack>
            <Box>
                <Text fontSize="15" textAlign="left">Email</Text>
                <Input isRequired/>
            </Box>
            <Box>
                <Text fontSize="15" textAlign="left">Message</Text>
                <Textarea fontSize="15"></Textarea>
            </Box>
            <Box></Box>
            <Button
            onClick={props.HandleSubmitClick}
            backgroundColor="#ffffff" 
            color="#050505"
            loadingText='Transmitting message...'>
                Send me a message
            </Button>
        </Stack>
    )
}

export default ContactForm;