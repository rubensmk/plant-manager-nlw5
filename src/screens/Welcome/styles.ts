import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.Text`
    color: ${colors.heading};
    font-size: 32px;
    font-weight: bold;
    text-align:center;
    margin-bottom:9px;
`;

export const Subtitle = styled.Text`
    color: ${colors.heading};
    font-size: 18px;
    padding: 10px 20px;
    text-align:center;
`;



export const Image = styled.Image`
    width: 292px;
    height: 284px;
`;