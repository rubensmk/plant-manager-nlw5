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
    margin-top:10px;
`;
export const Subtitle = styled.Text`
    color: ${colors.heading};
    font-family:${fonts.text};
    font-size: 18px;
    padding-top:20px;
    text-align:center;
`;

