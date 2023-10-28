import React from 'react';
import {Drawer, DrawerBody,DrawerHeader, DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";
  

const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure('');
  return (
    <>
    
    <Button 

    zIndex={'overlay'} 
    pos={'fixed'} 
    top={'10'} 
    left={'2'} 
    colorScheme="purple" 
    p={'0'}
    width={'10'}
     height={'10'}
     onClick={onOpen} 
    >
    <BiMenuAltLeft size={'30'}/>
    </Button>
    
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>

    <DrawerOverlay />
    
    <DrawerContent>
      
     <DrawerCloseButton/>

     

     <DrawerBody>

     <VStack alignItems={'center'} >
     <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
     <Link to={'/'}>Home</Link>
     </Button>
     
     
     </VStack>
     
<HStack pos={"absolute"} bottom={"10"} left={"0"}
w={'full'}
justifyContent={'center'}>
<Button onClick={onClose} colorScheme={'purple'}>
<Link to={'/login'}>Log In</Link>
</Button>
<Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
<Link to={'/signup'}>Sign Up</Link>
</Button>

</HStack>

     </DrawerBody>
     
    </DrawerContent>
    
     </Drawer>
    
    </>
  );
};

export default Header;