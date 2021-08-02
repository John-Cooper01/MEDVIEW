import {
  Box, Skeleton, SkeletonCircle, SkeletonText, Flex, Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Skeleton1() {
  return (
    <>
      <Box>
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: 10 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <Text
            fontSize='4xl'
            fontWeight='bold'
            letterSpacing='tight'
            color='blue.400'>
            MEDVIEW
            <Text
              as='span'
              ml='1'
              color='blue.400'>
              .
            </Text>
          </Text>

        </motion.div>
      </Box>
      <Flex padding="3" h="85px" bg='transparent'>

        <Skeleton h='54px' w='170px' />
        <SkeletonCircle size="1" mt='50' ml='1' />

        <Skeleton h='54px' w='170px' position='absolute' right='30px' />

      </Flex>
      <Flex justify='center' bg='transparent' h='744px'>
        <Skeleton h='730px' w='1425px' mt='7px' borderRadius={8} />
      </Flex>
    </>
  )
}