import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Button = styled.TouchableOpacity.attrs(props => ({
    activeOpacity: 0.8,
}))`
    background-color: ${colors.green};
    justify-content:center;
    align-items:center;
    border-radius:16px;
    margin-bottom: 10px;
    margin-top:48px;
    height: 56px;
    width: 56px;
`;