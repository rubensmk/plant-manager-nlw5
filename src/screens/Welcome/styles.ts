import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const Container = styled.SafeAreaView`
    flex:1;
`;

export const Wrapper = styled.View`
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
`;

export const Subtitle = styled.Text`
    color: ${colors.heading};
    font-family:${fonts.text};
    font-size: 18px;
    padding: 10px 20px;
    text-align:center;
`;



export const Image = styled.Image`
    height: ${Dimensions.get('window').width * 0.8}px;
`;