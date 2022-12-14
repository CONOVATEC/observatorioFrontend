import { memo } from 'react'
import { Button, Card, CardBody, Spinner, VStack } from '@chakra-ui/react'
import { FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import { config, CustomInput, CustomSelect } from './config'

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>
}

const Form = ({ onSubmit }: FormProps )=>{
  const {handleSubmit, register, formState: {isSubmitting}} =  useForm<FieldValues>()

  return (
    <Card>
      <CardBody>
        {isSubmitting && <Spinner />}
        {!isSubmitting && 
          <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
          {
            config
              .map(({label, name, type, options}, index)=> {
                const basicProps = { label, name }

                switch(type){
                  case 'select':{
                    if(!options)
                      throw new Error('not enough options to render')
                    return <CustomSelect
                      key={`select-${index}`} 
                      {...basicProps} 
                      options={options}
                    />
                  }
                  default:{
                    return <CustomInput 
                      key={`input-${index}`}
                      {...basicProps} 
                      type={type}
                      inputProps={register(name)}
                    /> 
                  }
                }
              })
          }
            <Button type='submit'>Enviar</Button>
          </VStack>
        }
      </CardBody>
    </Card>
  )
}

export default memo(Form)
