import React from 'react';
import { Box } from '@chakra-ui/react'


const Footer = () => {
  const date = new Date();
  const annee = date.getFullYear();
  return (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.300">
       © {annee} RealSpace, Inc. | Tous droits réservés
    </Box>
  );
}

export default Footer;
