import React from 'react';
import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {
    const { navigate } = useNavigation();
    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>
                    Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </S.Title>

                <S.Image source={wateringImg} resizeMode="contain" />

                <S.Subtitle>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
            </S.Subtitle>
                <Button width={76} iconName="chevron-right" iconColor="white" iconSize={38} onPress={() => navigate('UserIdentification')} />
            </S.Wrapper>
        </S.Container>


    )
}

export default Welcome;