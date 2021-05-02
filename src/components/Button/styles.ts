import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
    display:flex;
	flex-direction:row;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.green};
    margin-top:48px;
`;

export const ButtonText = styled.Text`
    margin-left:5px;
    color: #fff;
    font-size: 15px;
    font-family:${fonts.text};
    text-align: center;
`;

export const Icon = styled(Feather)``;