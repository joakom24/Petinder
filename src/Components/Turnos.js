import { Button } from '@chakra-ui/button';
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
const Turnos = ({ turno, deleteTurno }) => {
  return (
    <Container>
      <SimpleGrid p={3}>
        <Box
          border="4px solid"
          borderColor="gray.500"
          borderRadius="lg"
          p={4}
          backgroundColor="blue.700"
        >
          <Text color="white">
            Mascota: <span>{turno.mascota}</span>
          </Text>
          <Text color="white">
            Dueño: <span>{turno.dueño}</span>
          </Text>
          <Text color="white">
            Fecha: <span>{turno.fecha}</span>
          </Text>
          <Text color="white">
            Time: <span>{turno.time}</span>
          </Text>
          <Text color="white">
            Sintomas: <span>{turno.sintomas}</span>
          </Text>
          <Button
            colorScheme="red"
            variant="solid"
            type="submit"
            mt={4}
            width="100%"
            onClick={() => deleteTurno(turno.id)}
          >
            Borrar turno
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
Turnos.propTypes = {
  turno: PropTypes.object.isRequired,
  deleteTurno: PropTypes.func.isRequired,
};
export default Turnos;
