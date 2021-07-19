import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
    flex:1;
    max-width:45%;
    background-color:${colors.shape};
    border-radius:20px;
    align-items: center;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
`;

export const CardText = styled.Text`
    color: ${colors.green_dark};
    font-family:${fonts.heading};
    margin: 16px;
`;
