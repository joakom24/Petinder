import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  Text,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
const Form = ({ addTurno }) => {
  const [turno, updateTurno] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    time: '',
    sintomas: '',
  });
  const [error, updateEror] = useState(false);
  const updateState = e => {
    updateTurno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };
  const { mascota, dueño, fecha, time, sintomas } = turno;
  const submitTurno = e => {
    e.preventDefault();
    if (
      mascota.trim() === '' ||
      dueño.trim() === '' ||
      fecha.trim() === '' ||
      time.trim() === '' ||
      sintomas.trim() === ''
    ) {
      updateEror(true);
    } else {
      turno.id = uuidv4();
      addTurno(turno);
      updateEror(false);
    }

    updateTurno({ mascota: '', dueño: '', fecha: '', time: '', sintomas: '' });
  };
  return (
    <>
      <Text fontSize="3xl" color="tomato" fontWeight="bold">
        Crear turno
      </Text>
      {error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Todos los campos son obligatorios.</AlertTitle>
        </Alert>
      ) : null}
      <FormControl isRequired>
        <FormLabel color="white">Nombre Mascota</FormLabel>
        <Input
          color="white"
          type="text"
          onChange={updateState}
          placeholder="Nombre Mascota"
          name="mascota"
          value={mascota}
        />
        <FormLabel color="white">Nombre Dueño</FormLabel>
        <Input
          color="white"
          type="text"
          onChange={updateState}
          placeholder="Nombre Dueño"
          name="dueño"
          value={dueño}
        />
        <FormLabel color="white">Fecha</FormLabel>
        <Input
          type="date"
          color="white"
          onChange={updateState}
          name="fecha"
          value={fecha}
        />
        <FormLabel color="white">Hora</FormLabel>
        <Input
          type="time"
          color="white"
          onChange={updateState}
          name="time"
          value={time}
        />
        <FormLabel color="white">Sintomas</FormLabel>
        <Textarea
          color="white"
          type="text"
          onChange={updateState}
          name="sintomas"
          value={sintomas}
        ></Textarea>
        <Button
          mt={4}
          colorScheme="red"
          variant="solid"
          type="submit"
          onClick={submitTurno}
        >
          Agregar turno
        </Button>
      </FormControl>
    </>
  );
};

Form.protoTypes = {
  addTurno: PropTypes.func.isRequired,
};

export default Form;
