import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { InputContainer, InputText } from './styles';

const Input = ({ placeholder, event, value }) => (
  <InputContainer>
    <InputText placeholder={placeholder} value={value} />
    <TouchableOpacity onPress={event}>
      <Ionicons name="search" size={22} style={{ color: '#b0b0b0' }} />
    </TouchableOpacity>
  </InputContainer>
);

export default Input;
