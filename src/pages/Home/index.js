import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons';

import photoboot from '../../assets/photobooth.png';
import contract from '../../assets/contract.png';
import social from '../../assets/social.png';
import designer from '../../assets/designer.png';

import {
  Container,
  HeaderContainer,
  HeaderContainerText,
  HeaderTextWelcome,
  HeaderText,
  HeaderImage,
  InputContainer,
  InputText,
  CategoriesContainerText,
  CategoriesText,
  CategoriesContainer,
  CategoryButtonFirst,
  ImageButton,
  CategoryButtonSecond,
  TextLegend,
  TextLegendDescription,
  CategoriesContainerFirstColum,
  CategoriesContainerSecondColum,
  NavigationContainer,
} from './styles';

import image from '../../assets/everson.png';

const Home = ({ navigation }) => {
  const [color, setColor] = useState(true);
  return (
    <Container>
      <HeaderContainer>
        <HeaderContainerText>
          <HeaderTextWelcome>Olá, Everson Silva</HeaderTextWelcome>
          <HeaderText>Melhor forma de gerenciar seus parceiros.</HeaderText>
        </HeaderContainerText>
        <HeaderImage source={image} />
      </HeaderContainer>
      <InputContainer>
        <Ionicons name="search" size={22} style={{ color: '#b0b0b0' }} />
        <InputText placeholder="Search for anything" />
      </InputContainer>
      <CategoriesContainerText>
        <CategoriesText>Categorias</CategoriesText>
      </CategoriesContainerText>
      <ScrollView>
        <CategoriesContainer>
          <CategoriesContainerFirstColum>
            <CategoryButtonFirst
              onPress={() =>
                Linking.openURL(
                  'https://www.canva.com/design/DAEEOQMl4Fo/JBTzTtq01ykZmpC2zLmpiQ/view?website#2:pitstop-cabines'
                )
              }
            >
              <ImageButton>
                <Image style={{ width: 128, height: 128 }} source={photoboot} />
              </ImageButton>
              <TextLegend>Nossa Proposta</TextLegend>
              <TextLegendDescription>
                Conheça um pouco mais do nosso trabalho
              </TextLegendDescription>
            </CategoryButtonFirst>
            <CategoryButtonSecond
              onPress={() => navigation.navigate('Templates')}
            >
              <ImageButton>
                <Image style={{ width: 104, height: 104 }} source={designer} />
              </ImageButton>
              <TextLegend>Molduras</TextLegend>
              <TextLegendDescription>
                Conheça um pouco mais do nosso trabalho
              </TextLegendDescription>
            </CategoryButtonSecond>
          </CategoriesContainerFirstColum>
          <CategoriesContainerSecondColum>
            <CategoryButtonSecond
              onPress={() => navigation.navigate('Agreements')}
            >
              <ImageButton>
                <Image style={{ width: 96, height: 96 }} source={contract} />
              </ImageButton>
              <TextLegend>Agenda</TextLegend>
              <TextLegendDescription>Visualizar agenda</TextLegendDescription>
            </CategoryButtonSecond>
            <CategoryButtonFirst>
              <ImageButton>
                <Image
                  style={{ width: 128, height: 128, marginTop: 100 }}
                  source={social}
                />
              </ImageButton>
              <TextLegend>Mídias Sociais</TextLegend>
              <TextLegendDescription>Instagram, Facebook</TextLegendDescription>
            </CategoryButtonFirst>
          </CategoriesContainerSecondColum>
        </CategoriesContainer>
      </ScrollView>
      <NavigationContainer>
        <TouchableOpacity>
          <Ionicons
            name="logo-instagram"
            size={26}
            style={{ color: '#495b43' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="logo-whatsapp"
            size={26}
            style={{ color: '#495b43' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="logo-facebook"
            size={26}
            style={{ color: '#495b43' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Materialicons
            name="settings"
            size={26}
            style={{ color: '#495b43' }}
          />
        </TouchableOpacity>
      </NavigationContainer>
    </Container>
  );
};

export default Home;
