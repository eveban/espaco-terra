import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, HeaderTitle } from './styles';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BorderlessButton
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Feather name="arrow-left" size={24} color="#FFF" />
      </BorderlessButton>
      <HeaderTitle>{title}</HeaderTitle>
      <Feather name="arrow-right" size={24} color="#008956" />
    </Container>
  );
};

export default Header;
