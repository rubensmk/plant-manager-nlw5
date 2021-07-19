import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:space-between;
    padding: 0 30px;
    padding-top:50px;
    background-color:${colors.background};
`;

export const Spotlight = styled.View`
    background-color:${colors.blue_light};
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:110px;
    border-radius:20px;
    padding: 0 20px;
    margin-top:20px;

`;

export const SpotlightImage = styled.Image`
    width:60px;
    height:60px;
    
`;

export const SpotlightTitle = styled.Text`
    flex:1;
    color:${colors.blue};
    padding: 0 20px;
    text-align:left;
`;

export const Plants = styled.View`
    flex:1;
    width:100%;
    padding-bottom:10px;
`;

export const PlantsTitle = styled.Text`
    font-size:24px;
    font-family:${fonts.heading};
    color:${colors.heading};
    margin: 20px 0;
`;





