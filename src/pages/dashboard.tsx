import {
  Flex, Box, Table, Thead, Tr, Th, Tbody, Td, Button, Heading, Icon, useDisclosure,
  Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton,
  ModalBody, IconButton
} from '@chakra-ui/react'
import { Pagination } from '../components/Pagination'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { FaGgCircle } from 'react-icons/fa'
import { BsSquareFill } from 'react-icons/bs'
import { Header } from "../components/Header"
import { ModalAdd } from '../components/Modals/ModalAdd'
import { DBPatient } from '../services'


export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex direction='column' h='100vh'>
        <Header />
        <Flex w='100%' my='6' width='100%' mx='auto' px='6'>
          <Box width={500} flex='1' p='5' bg='gray.800' borderRadius={8} sx={{ overflow: 'auto' }}>
            <Flex mb='8' justify='space-between' align='center'>
              <Heading size='lg' fontWeight='normal'>Cirurgias</Heading>
              <Button
                as='a'
                size='sm'
                onClick={onOpen}
                fontSize='sm'
                colorScheme='blue'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                Adicionar
              </Button>
            </Flex>


            <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th textAlign='center'>Enf.</Th>
                  <Th textAlign='center'>Sala</Th>
                  <Th textAlign='center'>Inicio</Th>
                  <Th textAlign='center'>Fim</Th>
                  <Th>Procedimento</Th>
                  <Th textAlign='center'>Cirurgião</Th>
                  <Th textAlign='center'>Status</Th>
                  <Th />
                </Tr>
              </Thead>
              {DBPatient.map((patient, id) => (
                <Tbody key={id}>
                  <Tr>
                    <Td>{patient.name}</Td>
                    <Td textAlign='center'>{patient.NumEnf}</Td>
                    <Td textAlign='center'>{patient.NumSala}</Td>
                    <Td textAlign='center'>{patient.dataInicio}</Td>
                    <Td textAlign='center'>{patient.dataFim}</Td>
                    <Td>{patient.procedimento}</Td>
                    <Td textAlign='center' >{patient.medico}</Td>

                    <Td>
                      <Flex alignItems='center' justify='center'>
                        {
                          patient.statusPatient === 'PS'
                            ? <FaGgCircle size='35px' color='yellow' />
                            : patient.statusPatient === 'PCC'
                              ? <FaGgCircle size='35px' color='gray' />
                              : patient.statusPatient === 'PC'
                                ? <FaGgCircle size='35px' color='red' />
                                : patient.statusPatient === 'RPA'
                                  ? <FaGgCircle size='35px' color='orange' />
                                  : patient.statusPatient === 'EL'
                                    ? <BsSquareFill size='35px' color='green' />
                                    : patient.statusPatient === 'PT'
                                      ? <BsSquareFill size='35px' color='blue' />
                                      : ''
                        }
                      </Flex>
                    </Td>
                    <Th>
                      <IconButton aria-label="Add to friends" fontSize='20' icon={<RiPencilLine />} />
                    </Th>
                  </Tr>

                </Tbody>
              ))}

            </Table>
            <Pagination />
            <Flex justify='space-between' flexDir={{ base: 'column', md: 'inherit', lg: 'inherit' }} mt='8px'>
              <Flex p='4px' bg='blue.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FaGgCircle size='25px' color='blue' /> </Box>  <Box>Paciente em transporte </Box> </Flex>
              <Flex p='4px' bg='gray.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FaGgCircle size='25px' color='gray' /> </Box> <Box>Paciente no centro cirúrgico</Box> </Flex>
              <Flex p='4px' bg='yellow.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FaGgCircle size='25px' color='yellow' /></Box> <Box>Paciente em sala</Box> </Flex>
              <Flex p='4px' bg='red.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FaGgCircle size='25px' color='red' /></Box> <Box>Paciente em cirurgia </Box></Flex>
              <Flex p='4px' bg='orange.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <BsSquareFill size='25px' color='orange' /></Box> <Box>Encaminhado ao RPA </Box></Flex>
              <Flex p='4px' bg='green.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <BsSquareFill size='25px' color='green' /></Box> <Box>Encaminhado ao leito </Box></Flex>
            </Flex >
          </Box>
        </Flex>
      </Flex>

      <Box width={1000}>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='2xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Formulario para adicionar paciente</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalAdd />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}