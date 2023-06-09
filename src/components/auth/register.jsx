import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// const changeimageHandler = () => {
//   const file = e.target.files[0];
//   const reader = new FileReader();

//   reader.readAsDataURL(file);

//   reader.onloadend = () =>{
//     setImagePrev(reader.result)
//   }
// };

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ecc94b',
  backgroundColor: 'white',
};

const fileUploadStyle = { '&::file-selector-button': fileUploadCss };

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');



  const changeImageHandler = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () =>{
    setImagePrev(reader.result);
    setImage(file);
  }
};

  return (
    <Container minH={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Registration'} />

        <form style={{ width: '100%' }}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size="2xl" />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'name'}
              focusBorderColor="orange.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@xyz.com"
              type={'email'}
              focusBorderColor="orange.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Pas*word"
              type={'password'}
              focusBorderColor="orange.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="orange.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my="4" colorScheme="orange" type="submit">
            Sign In
          </Button>

          <Box my="4">
            Already a customer?{' '}
            <Link to="/login">
              <Button paddingRight="1" colorScheme="orange" variant="link">
                Sign In{' '}
              </Button>
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
