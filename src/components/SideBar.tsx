import { Box, Icon, Stack, Text, Link } from '@chakra-ui/react'
import { RiDashboard2Line } from 'react-icons/ri'
export function Sidebar() {
  return (
    <Box as='aside' w='64'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>GERAL</Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <Icon as={RiDashboard2Line} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}