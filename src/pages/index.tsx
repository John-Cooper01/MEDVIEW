import { Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'>
      <Flex

        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'>
        <Stack spacing='4'>
          <h1>TESTE AQUI oi</h1>
        </Stack>
      </Flex>

    </Flex>
  )
}
