import { forwardRef, ForwardRefRenderFunction } from "react"
import { FormControl, FormLabel, Select, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string;
  options: string;
}

const InputSelectBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ label, options, ...rest }: InputProps, ref) => {
    return (
      <>
        <FormControl id="country">
          <FormLabel>{label}</FormLabel>
          <Select
            placeholder="Select country" >
            <option>{options}</option>
          </Select>
        </FormControl>
      </>
    )
  }

export const InputSelect = forwardRef(InputSelectBase)