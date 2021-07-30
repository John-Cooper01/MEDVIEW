import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Flex, VStack, HStack, Box, Button, Textarea
} from "@chakra-ui/react"
import { Input } from '../../components/Form/Input'
import { InputNumber } from '../../components/Form/InputNumber'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup'
import { tableAddSchema } from '../../components/Validations'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'strawberry2', label: 'Strawberry2' },
  { value: 'strawberry3', label: 'Strawberry3' },
  { value: 'strawberry4', label: 'Strawberry4' },
]

const customStyles = {
  multiValue: styles => {
    return {
      ...styles,
      backgroundColor: '#616480'
    }
  },
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid pink',
    padding: 10,
    color: '#000'
  }),
  control: styles => ({
    ...styles,
    minWidth: '370px',
    maxWidth: '645px',
    minHeight: '45px',
    backgroundColor: '#1F2029',
    borderColor: '#1F2029',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#000',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontWeight: 'bold',
  }),
  theme: (theme) => ({
    ...theme,
    borderRadius: 8,
    colors: {
      ...theme.colors,
      primary: 'black',
    },
  }),
}

type FormAdd = {
  namePatient: string;
  numEnf: number;
  numLeito: number;
  numSala: number;
  dataInicio: number;
  dataFim: number;
  procedimento: string;
  cirurgiao: string;
  teste: string;
}

export function ModalAdd() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(tableAddSchema)
  })

  const { errors } = formState


  const handleAdd: SubmitHandler<FormAdd> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
  }

  return (
    <Box>
      <Flex
        onSubmit={handleSubmit(handleAdd)}
        as='form'>
        <VStack spacing={3}>

          <Input
            name='namePatient'
            type='text'
            label='Nome do paciente'
            error={errors.namePatient}
            {...register('namePatient')} />

          <HStack spacing={['0', '130']} display='flex' flexDir={['column', 'row']} >
            <Box sx={{ textAlign: 'center' }}>
              <InputNumber
                label='N° de Enf.'
                min={0} max={10}
                minWidth={['327px', '120px']}
                {...register('numEnf')} />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <InputNumber
                label='Leito'
                min={0}
                minWidth={['327px', '120px']}
                {...register('numLeito')} />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <InputNumber
                label='Sala'
                min={0} minWidth={['327px', '120px']}
                {...register('numSala')} />
            </Box>

          </HStack >

          <HStack spacing={['0', '4']} display='flex' flexDir={['column', 'row']}>
            <Input
              name='data'
              type='datetime-local'
              label='Inicio'
              width={['327px', '300px']}
              error={errors.dataInicio}
              {...register('dataInicio')} />
            <Input
              name='data'
              type='datetime-local'
              label='Conclusão'
              width={['327px', '300px']}
              {...register('dataFim')} />
          </HStack>
          <Input
            name='procedimento'
            type='text'
            label='Procedimento'
            error={errors.procedimento}
            {...register('procedimento')} />
          <Input
            name='cirurgiao'
            type='text'
            label='Cirurgião'
            error={errors.cirurgiao}
            {...register('cirurgiao')} />

          <Textarea
            size='sm'
          />

          <Select
            onChange={handleAdd}
            styles={customStyles}
            isMulti
            options={options} />

          <Button
            w='160px'
            left='230px'
            type='submit'
            colorScheme='blue'
            isLoading={formState.isSubmitting}>
            Salvar
          </Button>

        </VStack>
      </Flex>
    </Box>
  )
}