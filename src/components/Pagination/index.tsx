import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const subTitle = useColorModeValue('gray.50', 'gray.900')
  return (
    <Stack
      direction={['column', 'row']}
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'>
      <Box color={subTitle}>
        <strong>0</strong> - <strong>10</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}