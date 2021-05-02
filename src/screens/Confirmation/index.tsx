import React from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;

}

const emojis = {
    hug: '🤗',
    smile: '😄'
}


const Confirmation: React.FC = () => {

    const { navigate } = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;


    return (
        <S.Container>
            <Text style={{ fontSize: 78 }}>{emojis[icon]}</Text>
            <S.Title>{title}</S.Title>
            <S.Subtitle>
                {subtitle}
            </S.Subtitle>
            <Button title={buttonTitle} onPress={() => navigate(nextScreen)} />
        </S.Container>
    )
}

export default Confirmation;