import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import * as S from './styles';


const Welcome: React.FC = () => {

    return (
        <S.Container>
            <S.Title>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </S.Title>

            <S.Image source={wateringImg} />

            <S.Subtitle>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </S.Subtitle>

            <Button title={'>'} />

        </S.Container>


    )
}

export default Welcome;