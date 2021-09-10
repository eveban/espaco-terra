import styled from 'styled-components/native';

import { TextInput } from 'react-native';

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
