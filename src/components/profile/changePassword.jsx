import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const ChangePassword = () => {

const[oldPassword, setOldPassword] = useState("")
const[newPassword, setNewPassword] = useState("")





  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          my={'16'}
          textAlign={['cenetr', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type={'password'}
            focusBorderColor={'orange.400'}
          />
          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor={'orange.400'}
          />

          <Button w={'full'} colorScheme={'orange'} type='submit'>Update</Button>

        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
