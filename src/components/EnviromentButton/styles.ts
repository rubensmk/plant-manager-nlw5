import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import fonts from '../../styles/fonts';

interface EnviromentButtonProps {
    isActive?: boolean;
}

export const Container = styled(RectButton) <EnviromentButtonProps>`
    background-color:${colors.shape};
    width:76px;
    height:40px;
    justify-content:center;
    align-items:center;
    border-radius:12px;
    margin: 0 5px;

    ${props => props.isActive && css`
        background-color:${colors.green_light};
    `}

`;

export const ButtonText = styled.Text<EnviromentButtonProps>`
    color:${colors.heading};
    font-family:${fonts.text};

    ${props => props.isActive && css`
        color:${colors.green_dark};
        font-family:${fonts.heading};
    `}
`;
