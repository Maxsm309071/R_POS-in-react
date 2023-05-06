import React from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const goToProductHandler = () => {
  console.log('Products Page');
};

const Categories = ({
  name,
  description,
  imagesrc,
  id,
  goToProductHandler,
}) => {
  return (
    <VStack
      className="category"
      alignItems={['center', 'flex-start']}
      rounded="20"
    >
      <Image
        padding={'1'}
        src={imagesrc}
        boxSize="60"
        objectFit="cover"
        rounded="20"
        borderColor="blackAlpha.500"
      />
      <Heading
        paddingLeft={'2'}
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={name}
      />
      <Text paddingLeft={'3'} noOfLines={2} children={description} />

      <Stack
        direction={['column', 'row']}
        justifyContent="center"
        alignItems="center"
        paddingLeft={'2'}
        paddingBottom={'2'}
      >
        <Link to={`/category/${id}`}>
          <Button display={"flex"} justifyContent={'center'}
            variant={'ghost'}
            colorScheme={'orange'}
            onClick={() => goToProductHandler(id)}
          >
            Go to Products
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

const Category = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categoryArray = [
    'Pizza',
    'Burger',
    'Starter',
    'ColdDrinks',
    'HotBaverages',
  ];

  return (
    <Container maxH="container.lg" paddingY={'8'} h={'90vh'}>
      <Heading children="Search by Categories" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Categories...."
        type="text"
        focusBorderColor="orange.400"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categoryArray.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'40'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        textWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Categories
          name={'SampleName'}
          description={'sampleDesc'}
          imagesrc={
            'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg'
          }
          id={'sampleId'}
          goToProductHandler={goToProductHandler}
        />
      </Stack>
    </Container>
  );
};

export default Category;
