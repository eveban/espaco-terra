import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Background,
  Container,
  ListContainer,
  ContainerAgreements,
  ContainerDateValue,
  TextHeaderList,
  Name,
  NameProduct,
  Date,
  ContainerDateValue2,
  List,
  InputContainer,
  InputText,
} from './styles';

const Agreement = () => {
  const [name, setName] = useState('');
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    if (name.length === 0 || name.length >= 3) {
      api.get(`agreements/partners?name=${name}`).then((response) => {
        setAgreements(response.data);
      });
    }
  }, [name]);

  const handleSearchAgremeent = () => {
    api.get(`agreements/partners?name=${name}`).then((response) => {
      setAgreements(response.data);
      setName('');
    });
  };

  return (
    <>
      <Header title="Contratos" />
      <Background>
        <Container>
          <InputContainer>
            <InputText
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Buscar por cliente"
              returnKeyType="send"
              keyboardType="default"
              onChangeText={(text) => setName(text)}
              // value={name}
            />
            <TouchableOpacity onPress={handleSearchAgremeent}>
              <Ionicons name="search" size={22} style={{ color: '#b0b0b0' }} />
            </TouchableOpacity>
          </InputContainer>
          {/* <TouchableOpacity onPress={handleSearchAgremeent}>
            <Icon name="search" size={30} />
          </TouchableOpacity> */}
        </Container>

        <ListContainer>
          <TextHeaderList>Contratos</TextHeaderList>
          <List
            data={agreements}
            showsVerticalScrollIndicator={false}
            keyExtractor={(agreement) => String(agreement.id)}
            renderItem={({ item }) => (
              <ContainerAgreements
                key={String(item.id)}
                onPress={() => {}}
                style={
                  item.status === 'Quitado'
                    ? { backgroundColor: '#EAFAF1', borderColor: '#ABEBC6' }
                    : { backgroundColor: '#F9EBEA', borderColor: '#E6B0AA' }
                }
              >
                <ContainerDateValue>
                  <ContainerDateValue2>
                    <Date>{moment(item.dataEvento).format('DD/MM/YYYY')}</Date>
                  </ContainerDateValue2>
                  <Name>{item.name}</Name>
                  <NameProduct>{item.product}</NameProduct>
                </ContainerDateValue>
              </ContainerAgreements>
            )}
          />
          {/* <ActionContainer>
            <ContainerButtonAdd onPress={() => navigation.navigate('Criar')}>
              <ButtonAdd colors={['rgb(255, 132, 173)', '#d91c5c', '#8b143c']}>
                <Icon name="plus" color="#fff" size={25} />
              </ButtonAdd>
            </ContainerButtonAdd>
          </ActionContainer> */}
        </ListContainer>
      </Background>
    </>
  );
};

export default Agreement;
