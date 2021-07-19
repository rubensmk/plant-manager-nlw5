import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    background-color:${colors.background};
    flex:1;
`;


export const ListEnviromentView = styled.View`
`;

export const ListEnviroments = styled(FlatList as new () => FlatList)`
    height:40px;
    margin: 10px 0px 0px 10px;
`;

export const ListPlantsView = styled.View`
    flex:1;
`;

export const ListPlants = styled(FlatList as new () => FlatList)`
    margin-left: 32px;
    margin: 32px 0px;
`;

