import { FormLabel, Input, Select } from '@chakra-ui/react'

export const genres = [
  { value: 'masculino', label: 'Masculino', },
  { value: 'femenino', label: 'Femenino' },
  { value: 'no-binario', label: 'No binario' },
  { value: 'none', label: 'No especifica' }
]

const roles = [
  { value: 'voluntario', label: 'Voluntario(a)' },
  { value: 'organizacion', label: 'Organización' },
  { value: 'asesor', label: 'Asesor(a)' },
]

export const config = [
  { name: 'name', label: 'Nombre', type: 'text', placeHolder: 'Ingrese su nombre', required: true },
  { name: 'last-name', label: 'Apellido', type: 'text', placeHolder: 'Ingrese su apellido', required: true },
  { name: 'birthday', label: 'Cumpleaños', type: 'date' },
  { name: 'email', label: 'Correo electronico', type: 'email', placeHolder: 'ejemplo@ejemplo.com', required: true },
  { name: 'genre', label: 'Genero', type: 'select', options: genres },
  { name: 'role', label: 'Ser parte del Observatorio Joven', type: 'select', options: roles },
  { name: 'getData', label: 'Obtener los datos de las juventudes ', type: 'checkbox' },
  { name: 'alliance', label: 'Generar alianza', type: 'checkbox' },
  { name: 'message', label: 'Mensaje (opcional)', type: 'textarea', placeHolder: 'Escribe tu comentario...' }
]


interface CustomFormItem {
  placeHolder?: string;
  label: string;
  name: string;
  inputProps?: any;
  required?: boolean
}
interface CustomInputProps extends CustomFormItem {
  type: string;
}

interface CustomSelectProps extends CustomFormItem {
  options: { value: string, label: string }[]
}

export const CustomInput = ({ label, type, name, inputProps, placeHolder }: CustomInputProps) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input  variant='flushed' type={type} name={name} placeholder={placeHolder}  {...inputProps} />
    </>
  )
}

// TODO: desacoplar
export const CustomSelect = ({ label, options, name, inputProps }: CustomSelectProps) => {
  return (
    <>
      <FormLabel >{label}</FormLabel>
      <Select variant='flushed' name={name} {...inputProps}>
        {
          options
            .map(({ label, value }, index) =>
              <option key={`${label}-${index}`} value={value}>{label}</option>
            )
        }
      </Select>
    </>
  )
}
