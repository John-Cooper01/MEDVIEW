import * as yup from 'yup'

export const tableAddSchema = yup.object().shape({
  namePatient: yup.string().required('Nome do paciente obrigatório'),
  procedimento: yup.string().required('Campo obrigatório'),
  cirurgiao: yup.string().required('Campo obrigatório'),
  observação: yup.string().required('Campo obrigatório'),
})
