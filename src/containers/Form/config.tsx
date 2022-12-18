import { FormLabel, Input, Select } from '@chakra-ui/react'

export const genres = [
  {
    value: 'masculino',
    label: 'Masculino',
  },
  {
    value: 'femenino',
    label: 'Femenino'
  },
  {
    value: 'no-binario',
    label: 'No binario',
  },
  {
    value: 'none',
    label: 'No especifica',
  }
]

const roles = [
  {
    value: 'voluntario(a)',
    label: 'Voluntario(a)'
  }
]

export const config = [
  { name: 'name', label:'Nombre', type: 'text' },
  { name: 'last-name', label:'Apellido', type: 'text' } ,
  { name: 'birthday', label:'Cumpleanios', type: 'date' } ,
  { name: 'email', label:'Correo electornico', type: 'email' },
  { 
    name: 'genre', 
    label: 'Genero', 
    type: 'select',
    options: genres,
  },
  {
    name: 'role',
    label: 'Ser parte del Observatorio Joven',
    type: 'select',
    options: roles,
  }  
]


interface CustomFormItem {
  placeHolder?: string;
  label: string;
  name: string;
  inputProps?: any;
}
interface CustomInputProps extends CustomFormItem {
  type: string;
}

interface CustomSelectProps extends CustomFormItem {
  options: { value: string, label: string }[]
}

export const CustomInput = ({ placeHolder, label, type, name, inputProps } : CustomInputProps)=>{
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placeHolder} type={type} name={name} {...inputProps}/>
    </>
  )
}

// TODO: desacoplar
export const CustomSelect = ({ label, options, name, inputProps }: CustomSelectProps)=>{
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select name={name} {...inputProps}>
        {
          options
            .map(({label, value}, index)=> 
              <option key={`${label}-${index}`} value={value}>{label}</option>
            )
        }
      </Select>
    </>
  )
}
