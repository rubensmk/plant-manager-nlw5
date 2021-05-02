import React, { useState } from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import { Keyboard, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Welcome: React.FC = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const { navigate } = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value);
        setName(value);
    }
    async function handleNavigation() {
        if (!name) {
            return Alert.alert('Me diz como chamar você 😢')
        }
        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            })
        } catch (error) {
            Alert.alert('Não foi possível salavar o seu nome 😢')
        }

    }

    return (
        < S.Container >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <S.Content>
                    <Text style={{ fontSize: 46, alignSelf: "center" }}>{isFilled ? '😃' : '😄 '}</Text>
                    <S.Title>Como podemos {'\n'} chamar você?</S.Title>
                    <S.Input isFilled={isFilled} isFocused={isFocused} placeholder="Digite um nome" onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange} />
                    <Button title={'Confirmar'} onPress={handleNavigation} />
                </S.Content>
            </TouchableWithoutFeedback>
        </S.Container >
    )
}

export default Welcome;