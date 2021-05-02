import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';
import fonts from '../../styles/fonts';


export const Container = styled(RectButton)`
    width:100%;
    padding: 25px 10px;
    flex-direction:row;
    align-items:center;
    margin: 5px 0;
    background-color:${colors.shape};
    border-radius:20px;
`;

export const RemoveButton = styled(RectButton)`
    width:100px;
    height:85px;
    background-color:${colors.red};
    margin-top:15px;
    border-radius:20px;
    justify-content:center;
    align-items:center;
    position: relative;
    right:10px;
    padding-left:15px;
`;



export const CardTitle = styled.Text`
    flex:1;
    margin-left:10px;
    font-family:${fonts.heading};
    font-size:17px;
    color:${colors.heading};
`;

export const Details = styled.View`
    align-items:flex-end;
`;
export const TimeLabel = styled.Text`
    font-size:16px;
    font-family:${fonts.text};
    color:${colors.body_light};
`;
export const Time = styled.Text`
    margin-top:5px;
    font-size:16px;
    font-family:${fonts.heading};
    color:${colors.body_dark};
`;