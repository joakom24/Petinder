import React from 'react';
import Form from './Components/Form';
import Turnos from './Components/Turnos.js';
import {
  ChakraProvider,
  Container,
  Box,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {
  let turnosIniciales = JSON.parse(localStorage.getItem('turnos'));
  if (!turnosIniciales) {
    turnosIniciales = [];
  }
  const [turnos, saveTurnos] = useState(turnosIniciales);
  const addTurno = turno => {
    saveTurnos([...turnos, turno]);
  };
  const deleteTurno = id => {
    const newTurnos = turnos.filter(turno => turno.id !== id);
    saveTurnos(newTurnos);
  };

  const title =
    turnos.length === 0 ? 'No hay turnos disponibles.' : 'Administrar turnos';

  useEffect(() => {
    if (turnosIniciales) {
      localStorage.setItem('turnos', JSON.stringify(turnos));
    } else {
      localStorage.setItem('turnos', JSON.stringify([]));
    }
  }, [turnos, turnosIniciales]);
  return (
    <ChakraProvider>
      <Container
        maxW="100vw"
        minH="100vh"
        backgroundColor="purple.500"
        centerContent
      >
        <Box>
          <Text fontSize="6xl" color="tomato" textAlign="center">
            Petinder
          </Text>
          <SimpleGrid columns={1} spacing={10}>
            <Box>
              <Form addTurno={addTurno} />
            </Box>
            <Box p={4}>
              <Text fontSize="3xl" color="tomato" fontWeight="bold">
                {title}
              </Text>
              {turnos.map(turno => (
                <Turnos
                  key={turno.id}
                  turno={turno}
                  deleteTurno={deleteTurno}
                />
              ))}
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
