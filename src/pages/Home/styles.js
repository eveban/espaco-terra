import styled from 'styled-components/native';
import { Image, TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #495b43;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const HeaderContainer = styled.View`
  width: auto;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderContainerText = styled.View`
  flex-direction: column;
`;
export const HeaderTextWelcome = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #ffffff;
`;
export const HeaderText = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const HeaderImage = styled(Image)`
  width: 52px;
  height: 52px;
  border-radius: 26px;
`;

export const InputContainer = styled.View`
  width: auto;
  height: 54px;
  margin: 24px 0;
  border-radius: 26px;
  background: #fff;
  padding: 0 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  align-items: center;
  margin-left: 10px;
`;

export const ContainerScrollView = styled.View`
  flex: 1;
  border: 1px solid #fff;
`;

export const CategoriesContainerText = styled.View`
  width: auto;
`;

export const CategoriesText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_700Bold';
  color: #ffffff;
`;

export const CategoriesContainer = styled.View`
  flex: 1;
  margin-top: 16px;

  flex-direction: row;
  justify-content: space-between;
`;
export const CategoriesContainerFirstColum = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 5px;
`;
export const CategoriesContainerSecondColum = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
`;

export const CategoryButtonFirst = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 60%;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const ImageButton = styled.View`
  height: 60%;
  background-color: rgba(73, 91, 67, 0.2);

  align-items: center;
  justify-content: flex-end;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CategoryButtonSecond = styled.TouchableOpacity`
  width: 100%;
  height: 38%;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TextLegend = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Roboto_700Bold';
  color: #121539;
`;
export const TextLegendDescription = styled.Text`
  margin-left: 10px;
  font-size: 12px;
  font-family: 'Roboto_700Bold';
  color: #c0c0c0;
`;

export const NavigationContainer = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 32px;
  background: #fff;
  padding: 0 40px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;

  margin-bottom: 20px;
`;
