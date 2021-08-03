import { useState, useEffect } from 'react'
import {
  Flex, Box, Table, Thead, Tr, Th, Tbody, Td, Button, Heading, Icon, useDisclosure,
  Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton,
  ModalBody, useColorModeValue, ModalFooter
} from '@chakra-ui/react'
import { Pagination } from '../components/Pagination'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { FiAlertOctagon, FiAlertTriangle, FiAlertCircle } from 'react-icons/fi'
import { FaGgCircle } from 'react-icons/fa'
import { BsSquareFill } from 'react-icons/bs'
import { Header } from "../components/Header"
import { ModalAdd } from '../components/Modals/ModalAdd'
import { DBPatient } from '../services'
import { Skeletons } from '../components/Skeleton/skeleton_dash'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  /*-------------------------------- THEMEDARK MODE ---------------------------------------*/
  const bg = useColorModeValue('gray.800', 'white')
  const colorLine = useColorModeValue('whiteAlpha', 'linkedin')
  const colorTitle = useColorModeValue('gray.50', 'blue.300')
  const subTitle = useColorModeValue('gray.50', 'gray.900')
  const colorText = useColorModeValue('gray.50', 'gray.500')
  const bgModal = useColorModeValue('gray.700', 'gray.700')
  const colorIcons = useColorModeValue('gray.200', 'gray.200')
  /*---------------------------------------------------------------------------------------*/
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    setIsloading(true)
    setTimeout(() => {
      //api
      setIsloading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isloading ? <Skeletons />
        : <Box> <Flex direction='column' h='100vh'>
          <Header />
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}>
            <Flex w='100%' my='6' width='100%' mx='auto' px='6'>

              <Box width={500} flex='1' p='5' bg={bg} borderRadius={8}>
                <Flex mb='8' justify='space-between' align='center'>
                  <Heading color={colorTitle} size='lg' fontWeight='bold'>Cirurgias</Heading>
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

                <Table colorScheme={colorLine}>
                  <Thead>
                    <Tr>
                      <Th color={subTitle}>Nome</Th>
                      <Th color={subTitle} textAlign='center'>Enf.</Th>
                      <Th color={subTitle} textAlign='center'>Sala</Th>
                      <Th color={subTitle} textAlign='center'>Inicio</Th>
                      <Th color={subTitle} textAlign='center'>Fim</Th>
                      <Th color={subTitle}>Procedimento</Th>
                      <Th color={subTitle} textAlign='center'>Cirurgião</Th>
                      <Th color={subTitle} textAlign='center'>Status</Th>
                      <Th />
                    </Tr>
                  </Thead>
                  {DBPatient.map((patient, id) => (
                    <Tbody key={id}>
                      <Tr>
                        <Td color={colorText} sx={{ cursor: 'pointer' }}>{patient.name}</Td>
                        <Td color={colorText} textAlign='center'>{patient.NumEnf}</Td>
                        <Td color={colorText} textAlign='center'>{patient.NumSala}</Td>
                        <Td color={colorText} textAlign='center'>{patient.dataInicio}</Td>
                        <Td color={colorText} textAlign='center'>{patient.dataFim}</Td>
                        <Td color={colorText}>{patient.procedimento}</Td>
                        <Td color={colorText} textAlign='center' >{patient.medico}</Td>

                        <Td>
                          <Flex alignItems='center' justify='center'>
                            {
                              patient.statusPatient === 'PS'
                                ? <FiAlertCircle size='35px' color='yellow' />
                                : patient.statusPatient === 'PCC'
                                  ? <FiAlertOctagon size='35px' color='gray' />
                                  : patient.statusPatient === 'PC'
                                    ? <FiAlertTriangle size='35px' color='red' />
                                    : patient.statusPatient === 'RPA'
                                      ? <FiAlertCircle size='35px' color='orange' />
                                      : patient.statusPatient === 'EL'
                                        ? <FiAlertCircle size='35px' color='green' />
                                        : patient.statusPatient === 'PT'
                                          ? <FiAlertCircle size='35px' color='blue' />
                                          : ''
                            }
                          </Flex>
                        </Td>

                        <Th>
                          <RiPencilLine fontSize='25px' color={colorIcons} cursor='pointer' />
                        </Th>
                      </Tr>

                    </Tbody>
                  ))}

                </Table>
                <Pagination />
                <Flex justify='space-between' flexDir={{ base: 'column', md: 'inherit', lg: 'inherit' }} mt='8px'>
                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.2, duration: 1.2 }}>
                    <Flex p='4px' bg='blue.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertCircle size='25px' color='blue' /> </Box>  <Box>Paciente em transporte </Box> </Flex>
                  </motion.div>

                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.3, duration: 1.3 }}>
                    <Flex p='4px' bg='gray.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertOctagon size='25px' color='gray' /> </Box> <Box>Paciente no centro cirúrgico</Box> </Flex>
                  </motion.div>

                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.4, duration: 1.4 }}>
                    <Flex p='4px' bg='yellow.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertCircle size='25px' color='yellow' /></Box> <Box>Paciente em sala</Box> </Flex>
                  </motion.div>

                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.5, duration: 1.5 }}>
                    <Flex p='4px' bg='red.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertTriangle size='25px' color='red' /></Box> <Box>Paciente em cirurgia </Box></Flex>
                  </motion.div>

                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.6, duration: 1.7 }}>
                    <Flex p='4px' bg='orange.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertCircle size='25px' color='orange' /></Box> <Box>Encaminhado ao RPA </Box></Flex>
                  </motion.div>

                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.8, duration: 1.8 }}>
                    <Flex p='4px' bg='green.900' alignItems='center' borderRadius='5px'> <Box mr='10px'> <FiAlertCircle size='25px' color='green' /></Box> <Box>Encaminhado ao leito </Box></Flex>
                  </motion.div>
                </Flex >
              </Box>
            </Flex>
          </motion.div>
        </Flex>

          <Box width={1000}>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='2xl'>
              <ModalOverlay />
              <ModalContent background={bgModal}>
                <ModalHeader>Formulario para adicionar paciente</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ModalAdd />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      }
    </>
  )
}