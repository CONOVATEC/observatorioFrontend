import { memo } from 'react';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  FormLabel,
  Spinner,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { config, CustomInput, CustomSelect } from './config';

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  return (
    <Card width={'80%'} mb="8">
      <CardBody>
        {isSubmitting && <Spinner />}
        {!isSubmitting && (
          <VStack
            as='form'
            onSubmit={handleSubmit(onSubmit)}
            alignItems='start'
            gap={4}
          >
            {config.map(
              (
                { label, name, type, options, placeHolder, required },
                index
              ) => {
                const basicProps = { label, name, placeHolder, required };

                switch (type) {
                case 'select': {
                  if (!options)
                    throw new Error('not enough options to render');
                  return (
                    <CustomSelect
                      key={`select-${index}`}
                      {...basicProps}
                      options={options}
                      inputProps={register(name)}
                    />
                  );
                }
                case 'checkbox': {
                  return <Checkbox {...register(name)}>{label}</Checkbox>;
                }
                case 'textarea': {
                  return (
                    <>
                      <FormLabel>{label}</FormLabel>
                      <Textarea
                        placeholder={placeHolder}
                        {...register(name)}
                      />
                    </>
                  );
                }
                default: {
                  return (
                    <CustomInput
                      key={`input-${index}`}
                      {...basicProps}
                      type={type}
                      inputProps={register(name)}
                    />
                  );
                }
                }
              }
            )}
            <Button type='submit'>Enviar</Button>
          </VStack>
        )}
      </CardBody>
    </Card>
  );
};

export default memo(Form);
