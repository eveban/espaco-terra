import styled from 'styled-components/native';

import { FlatList, TouchableOpacity, TextInput } from 'react-native';

export const Background = styled.View`
  flex: 1;
  background-color: #008956;
`;
export const Container = styled.View`
  padding: 0 20px;
`;
export const FindContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ListContainer = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  /* justify-content: flex-end; */
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  /* padding-top: 10px; */
`;

export const ContainerAgreements = styled(TouchableOpacity)`
  height: 76px;
  padding: 5px 40px;
  margin: 5px 10px;
  border-radius: 38px;
  /* border: 1px solid; */
  /* elevation: 1; */
`;

export const Name = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: 'Ubuntu_700Bold';
  color: #121539;
  margin-top: 4px;
`;
export const NameProduct = styled.Text`
  flex: 1;
  font-size: 16px;
  font-family: 'Ubuntu_700Bold';
  color: #121539;
  margin-top: 4px;
  opacity: 0.6;
`;

export const TextHeaderList = styled.Text`
  font-size: 20px;
  font-family: 'Ubuntu_700Bold';
  color: #121539;
  margin-top: 40px;
  margin-left: 20px;
`;

export const ContainerDateValue = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerDateValue2 = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.Text`
  font-size: 14px;
  font-family: 'Ubuntu_700Bold';
  color: #121539;
  opacity: 0.6;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const InputContainer = styled.View`
  width: auto;
  height: 54px;
  /* margin-top: 10px; */
  margin-bottom: 20px;
  border-radius: 26px;
  background: #fff;
  padding: 0 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InputText = styled(TextInput)`
  flex: 1;
  margin-left: 10px;
`;
