import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';
// import cursor from '../../../assets/images/cursor.png'
import SideBar from '../sideBar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from '../dashboardView/chart';

const Databox = ({ title, qty, qtyper, profit }) => (
  <Box
    w={['full', '30%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.3)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack>
        <Text children={`${qtyper}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children="Since Last Month" />
  </Box>
);


const Bar = ({title, value, profit}) => (

<Box py={'4'} px={['0', '20']}>
  <Heading size='sm' children={title} mb='2'  />
  <HStack w={'full'} alignItems={'center'}
  >
  <Text children={profit?"0%":`-${value}%` }  />
  <Progress w={'full'} value={profit?value:0} colorScheme='purple' />
  <Text children={` ${value > 100? value : 100}%`} />


  </HStack>
</Box>

)

const Dashboard = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box boxSize="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last Change was on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
          children="Dashboard "
          ml={['0', '16']}
          textAlign={['center', 'left']}
        />
        <br />

        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="Orders" qty={10} qtyper={20} profit={true} />
          <Databox title="Users" qty={23} qtyper={51} profit={true} />
          <Databox title="Subscription" qty={12} qtyper={53} profit={false} />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.3)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size="md"
            children="Orders Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />


          <LineChart />
        </Box>


        <Grid templateColumns={['1fr', "2fr 1fr"]}>

<Box p={'4'}>

<Heading textAlign={['center', 'left']} size={'md'} children='Progresss Bar' my={'8'} ml={['0', '16']} />

<Box>
  <Bar title="Orders" value="110" profit={true} />
  <Bar title="Users" value="45" profit={true}/>
  <Bar title="Subscription" value="12" profit={true}/>
</Box>

</Box>
<Box
p={['0', '16']}
boxSize='border-box'
py={'4'}
>
<Heading textAlign={'center'} size={'md'} mb={'4'} children='Users' /> 

<DoughnutChart />
</Box>

        </Grid>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Dashboard;
