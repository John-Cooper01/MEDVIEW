import { Flex, Text, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiBuilding2Line } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w='64'
      >
        MEDVIEW

        <Text
          as='span'
          ml='1'
          color='blue.200'
        >
          .
        </Text>
      </Text>

      <Flex
        align='center'
        ml='auto'
      >
        <HStack
          spacing='4'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiBuilding2Line} fontSize='20' />
        </HStack>
      </Flex>
    </Flex>
  )
}