import { Button, VStack } from '@chakra-ui/react';
import React from 'react';

import { RiAddBoxFill, RiAddCircleFill, RiDashboardFill,  RiShoppingBag3Fill, RiShoppingCartFill, RiStackFill, RiUser3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {
    const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.3)'}
    >
      <LinkButton Icon={RiDashboardFill} text="Dashboard" url={'dashboard'} active={location.pathname==="/admin/dashboard"}/>
      <LinkButton Icon={RiStackFill} text="Category" url={'category'} active={location.pathname==="/admin/category"}/>
      <LinkButton Icon={RiAddBoxFill} text="Add Category" url={'addcategory'} active={location.pathname==="/admin/addcategory"}/>
      <LinkButton Icon={RiShoppingBag3Fill} text="Product" url={'product'} active={location.pathname==="/admin/product"}/>
      <LinkButton Icon={RiAddCircleFill} text="Add Product" url={'addproduct'} active={location.pathname==="/admin/addproduct"}/>
      <LinkButton Icon={RiShoppingCartFill} text="Order" url={'order'} active={location.pathname==="/admin/order"}/>
      <LinkButton Icon={RiUser3Fill} text="User" url={'user'} active={location.pathname==="/admin/user"}/>
    </VStack>
  );
};

export default SideBar;

function LinkButton({url, Icon, text, active}) {
  return (
    <Link to={`/admin/${url}`}>
      <Button fontSize={'larger'} variant={'ghost'} colorScheme={active?"purple": ""}>
        <Icon style={{margin: "2px"}}/>
        {text}
      </Button>
    </Link>
  );
}
