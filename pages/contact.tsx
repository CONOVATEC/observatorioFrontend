import { CircularProgress, VStack } from '@chakra-ui/react'
import { FieldValue, FieldValues, SubmitHandler } from 'react-hook-form'
import Form from '../src/containers/Form'
import { usePostFormContactMutation } from '../src/redux/form/slice'
import DefaultLayout from '../src/views/DefaultLayout'

const Contact =() =>{
  const [ handlePostForm, { isLoading }] = usePostFormContactMutation()

  const _handleSubmit: SubmitHandler<FieldValues>= (values)=>{
    handlePostForm(values)
  }

  return (
    <DefaultLayout>
      <VStack minH={'80vh'} w={'100%'} justifyContent='center'>
        {isLoading && <CircularProgress />}
        {!isLoading && <Form onSubmit={_handleSubmit}/>}
      </VStack>
    </DefaultLayout>
  )
}

export default Contact
