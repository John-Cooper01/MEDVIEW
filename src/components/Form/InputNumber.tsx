import { forwardRef, ForwardRefRenderFunction } from "react"
import {
  NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
  Text, Box, InputProps as ChakraInputProps, FormControl, FormErrorMessage
} from "@chakra-ui/react"
import { FieldError } from "react-hook-form"


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  max?: number;
  min?: number;
  error?: FieldError;
}

const InputNumberBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ label, max, min, name, error = null }: InputProps, ref) => {
    return (

      <Box >
        <FormControl isInvalid={!!error}>
          <Text>
            {label}
          </Text>
          <NumberInput
            focusBorderColor='blue.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{
              bgColor: 'gray.900'
            }}
            borderRadius={6}
            size='lg'
            min={min}
            max={max}>
            <NumberInputField
              name={name}
              bgColor='gray.900'
              ref={ref} />

            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {!!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )}
        </FormControl>

      </Box>

    )
  }

export const InputNumber = forwardRef(InputNumberBase)