import { Skeleton, SkeletonCircle, Flex } from '@chakra-ui/react'

export function Skeletons() {
  return (
    <>
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