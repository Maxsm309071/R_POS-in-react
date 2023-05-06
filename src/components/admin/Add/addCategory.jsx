import React from 'react';
import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import SideBar from '../sideBar';
import { useState } from 'react';
import { fileUploadCss } from '../../auth/register';

const AddCategory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
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
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Add Category"
            my={'16'}
            textAlign={['center', 'left']}
          />
        </form>

        <VStack m={'auto'} spacing={'8'}>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Category Title"
            type="text"
            focusBorderColor="purple.300"
          />
          <Input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            type="text"
            focusBorderColor="purple.300"
          />
          <Input
            value={createdBy}
            onChange={e => setCreatedBy(e.target.value)}
            placeholder="Created By"
            type="text"
            focusBorderColor="purple.300"
          />

          <Input
            accept="image/*"
            required
            
            type={'file'}
            focusBorderColor="purple"
            css={{'&::file-selector-button': {
              ...fileUploadCss, color: 'purple'
            }}}
            onChange={changeImageHandler}
          />

          {imagePrev &&(
            <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}/>
          )}

          <Button w={'full'} colorScheme='purple' type='submit'>
            Create
          </Button>
        </VStack>
      </Container>
      <SideBar />
    </Grid>
  );
};

export default AddCategory;
