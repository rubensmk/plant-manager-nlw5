import React, { useState } from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import { Alert, Image, Platform, Touchable, StatusBar } from 'react-native';
import { SvgFromUri } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/core';
import waterDropImg from '../../assets/waterdrop.png';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import colors from '../../styles/colors';
import { PlantProps, savePlant } from '../../libs/storage';

interface Params {
    plant: PlantProps;
}
const PlantSave: React.FC = () => {
    const route = useRoute();
    const { navigate } = useNavigation();
    const { plant } = route.params as Params;

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro!⏰')
        }
        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState)
    }

    async function handleSave() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            })


            navigate('Confirmation',
                {
                    title: 'Tudo certo',
                    subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
                    buttonTitle: 'Muito Obrigado',
                    icon: 'hug',
                    nextScreen: 'MyPlants'
                });

        } catch (error) {
            Alert.alert('Não foi possível salvar!')
        }
    }
    return (
        <S.Container>
            <StatusBar backgroundColor={colors.shape} />
            <S.PlantInfo>
                <SvgFromUri
                    uri={plant.photo}
                    width={150}
                    height={150}
                />
                <S.PlantName>{plant.name}</S.PlantName>
                <S.PlantAbout>{plant.about}</S.PlantAbout>
            </S.PlantInfo>

            <S.Controller>
                <S.TipContainer>
                    <Image source={waterDropImg} style={{ width: 56, height: 56 }} />
                    <S.TipText>{plant.water_tips}</S.TipText>
                </S.TipContainer>
                <S.AlertLabel>Escolha o melhor horário para ser lembrado:</S.AlertLabel>
                {showDatePicker && (
                    < DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}

                {Platform.OS === 'android' && (
                    <S.DateTimePicker onPress={handleOpenDateTimePickerForAndroid}>
                        <S.DateTimePickerText>
                            {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                        </S.DateTimePickerText>
                    </S.DateTimePicker>
                )}

                <Button title="Cadastrar Planta" width={300} height={60} onPress={handleSave} />
            </S.Controller>
        </S.Container >
    )
}

export default PlantSave;