import { Flex, Text, HStack, Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { RiNotificationLine, RiBuilding2Line } from 'react-icons/ri'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


export function Header() {

  /*-------------------------------- THEMEDARK MODE ---------------------------------------*/
  const { colorMode, toggleColorMode } = useColorMode()
  const colorIcons = useColorModeValue('gray.300', 'black')
  const colorText = useColorModeValue('gray.50', 'blue.200')
  const color = useColorModeValue('blue.200', 'black')
  /*---------------------------------------------------------------------------------------*/
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
        color={colorText}
      >
        MEDVIEW

        <Text
          as='span'
          ml='1'
          color={color}
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
          <Icon as={RiNotificationLine} color={colorIcons} fontSize='20' />
          <Icon as={RiBuilding2Line} color={colorIcons} fontSize='20' />
          <IconButton
            aria-label='theme'
            color={colorIcons}
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode} />
        </HStack>
      </Flex>
    </Flex>
  )
}