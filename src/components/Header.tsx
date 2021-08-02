import {
  Flex, Text, HStack, Icon, IconButton, useColorMode, useColorModeValue,
  Box
} from '@chakra-ui/react'
import { RiNotificationLine, RiBuilding2Line } from 'react-icons/ri'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

export function Header() {

  /*-------------------------------- THEMEDARK MODE ---------------------------------------*/
  const { colorMode, toggleColorMode } = useColorMode()
  const colorIcons = useColorModeValue('gray.300', 'black')
  const colorTitle = useColorModeValue('gray.50', 'blue.400')
  const color = useColorModeValue('blue.200', 'black')
  const bgButton = useColorModeValue('gray.900', 'gray.100')
  /*---------------------------------------------------------------------------------------*/

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='3'
      px='6'
      align='center'>
      <Box>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <Text
            fontSize='4xl'
            fontWeight='bold'
            letterSpacing='tight'
            color={colorTitle}>
            MEDVIEW
            <Text
              as='span'
              ml='1'
              color={color}>
              .
            </Text>
          </Text>
        </motion.div>
      </Box>

      <Flex
        align='center'
        ml='auto'>
        <HStack
          spacing='4'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'>

          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <Icon as={RiNotificationLine} color={colorIcons} fontSize='20' />
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}>
            <Icon as={RiBuilding2Line} color={colorIcons} fontSize='20' />
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}>
            <IconButton
              aria-label='theme'
              colorScheme='gray.50'
              bg={bgButton}
              color={colorIcons}
              icon={colorMode === 'light' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              onClick={toggleColorMode} />
          </motion.div>
        </HStack>
      </Flex>
    </Flex>
  )
}