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
        <Box w={["100%","70%"]}>
            <Stack>
                <Text fontSize={[25,35]} textAlign="center">Let's get in contact!</Text>
                <HStack>
                    <Box width="50%">
                        <Text fontSize={[15,20]} textAlign="left">First Name</Text>
                        <Input isRequired focusBorderColor="white" onChange={(e)=>{props.setFirstName(e.target.value)}}/>
                    </Box>
                    <Box width="50%">
                        <Text fontSize={[15,20]} textAlign="left">Last Name</Text>
                        <Input isRequired focusBorderColor="white" onChange={(e)=>{props.setLastName(e.target.value)}}/>
                    </Box>
                </HStack>
                <Box>
                    <Text fontSize={[15,20]} textAlign="left">Email</Text>
                    <Input isRequired type="Email" focusBorderColor="white" onChange={(e)=>{props.setEmail(e.target.value)}}/>
                </Box>
                <Box>
                    <Text fontSize={[15,20]} textAlign="left">Message</Text>
                    <Textarea fontSize={[15,20]} focusBorderColor="white" onChange={(e)=>{props.setMessage(e.target.value)}}/>
                </Box>
                <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                paddingTop={5}>
                    <Button
                    disabled={props.Loading}
                    isLoading={props.Loading}
                    onClick={props.HandleSubmitClick}
                    backgroundColor="#ffffff" 
                    color="#050505"
                    loadingText='Transmitting message...'
                    fontSize={[15,20]}
                    width={["100%","70%","50%"]}>
                        Send me a message
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default ContactForm;