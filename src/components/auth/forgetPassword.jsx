import { Container, Heading, VStack, Input, FormLabel, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail]= useState("")
  return (
    <Container py={'16'} h={'89.5vh'}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
        <FormLabel htmlFor="email" children="Email Address" />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@xyz.com"
            type={'email'}
            focusBorderColor="orange.500"
          />
          <Button type='submit' w={"full"} colorScheme='orange'>Send Reset Link</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
