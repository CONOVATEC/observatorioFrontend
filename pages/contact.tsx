import Form from '../src/containers/Form'
import DefaultLayout from '../src/views/DefaultLayout'

const Contact =() =>{
  return (
    <DefaultLayout>

      <Form onSubmit={console.log}/>
    </DefaultLayout>
  )
}

export default Contact
