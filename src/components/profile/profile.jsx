import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../auth/register';
import { useState } from 'react';

const Profile = () => {
  const user = {
    name: 'MAYANK',
    email: 'max@test.com',
    role: 'Admin',
    sub_status: 'active',
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log('iamge', image)
  }

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container minH={'90vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />

          <Button onClick={onOpen} colorScheme={'orange'} variant={'ghost'}>
            Change Avatar
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.sub_status === 'active' ? (
                <Button colorScheme={'orange'} variant={'ghost'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'orange'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <HStack>
        <Stack mr={'4'} px={'4'}>
          <Heading
            justifyContent={'center'}
            alignItems={'center'}
            children="Go to Orders"
          />
          <Link to="/orders">
            <Button>Orders</Button>
          </Link>
        </Stack>
        <Stack ml={'4'} px={'4'}>
          <Heading
            justifyContent={'center'}
            alignItems={'center'}
            children="Favourite Dishes"
          />
          <Link to="/favourite">
            <Button>favourite</Button>
          </Link>
        </Stack>
      </HStack>

      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };


const closeHandler = () => {
  onClose();
  setImagePrev("")
  setImage("")
}

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(5px)'} />
      <ModalContent>
      <ModalHeader>Change Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button w={'fill'} colorScheme={'orange'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
