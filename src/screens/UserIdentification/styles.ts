import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface InputProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const Content = styled.View`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 20px;

`;
export const Title = styled.Text`
    color: ${colors.heading};
    font-family:${fonts.heading};
    font-size: 28px;
    line-height:38px;
    font-weight: bold;
    text-align:center;
    margin-bottom:9px;
`;

export const Input = styled.TextInput<InputProps>`
    border-bottom-width:1px;
    border-color:${colors.gray};
    color: ${colors.heading};
    width:100%;
    font-size:18px;
    margin-top:50px;
    padding:10px;
    text-align: center;

    ${props => props.isFocused && css`
    border-color:${colors.green}
    `}

    ${props => props.isFilled && css`
    border-color:${colors.green}
    `}
`;
