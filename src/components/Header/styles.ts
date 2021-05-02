import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;


export const Greetings = styled.Text`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`;

export const Name = styled.Text`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height:40px;
`;

export const Avatar = styled.Image`
    width:100px;
    height:100px;
    border-radius:50px;
`;