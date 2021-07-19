import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import { Alert, StatusBar, Text, View } from 'react-native';
import colors from '../../styles/colors';
import Header from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { loadPlant, PlantProps, removePlant, StoragePlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import waterDropImg from '../../assets/waterdrop.png';
import PlantCardSecundary from '../../components/PlantCardSecundary';
import Load from '../../components/Load';


const MyPlants: React.FC = () => {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Desejar remover a ${plant.name}?`,
            [
                {
                    text: 'Não 🙏🏻',
                    style: 'cancel'
                },
                {
                    text: 'Sim 😢',
                    onPress: async () => {
                        try {

                            await removePlant(plant.id)

                            setMyPlants((oldData) => (
                                oldData.filter((item) => item.id !== plant.id)
                            ));

                        } catch (error) {
                            Alert.alert('Não foi possível remover 😢 ')
                        }
                    }
                }
            ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            );

            setMyPlants(plantsStoraged);
            setLoading(false);
        }
        loadStorageData();
    }, []);

    if (loading) {
        return <Load />
    }

    return (
        <S.Container>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Header />
            <S.Spotlight>
                <S.SpotlightImage source={waterDropImg} />
                <S.SpotlightTitle>{nextWatered}</S.SpotlightTitle>

            </S.Spotlight>

            <S.Plants>
                <S.PlantsTitle>
                    Próximas regadas
                </S.PlantsTitle>
                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecundary handleRemove={() => handleRemove(item)} data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </S.Plants>
        </S.Container >
    )
}

export default MyPlants;