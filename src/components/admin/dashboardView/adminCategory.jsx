import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import SideBar from '../sideBar'

const AdminCategory = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
    <Box></Box>
    <SideBar />
  </Grid>
  )
}

export default AdminCategory
