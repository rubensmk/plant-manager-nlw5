import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Text, StatusBar, View, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import EnviromentButton from '../../components/EnviromentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import { Load } from '../../components/Load';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { PlantProps } from '../../libs/storage';

interface EnviromentsProps {
    key: string;
    title: string;
}

const PlantSelect: React.FC = () => {

    const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const { navigate } = useNavigation();

    function handleEnviromentSelected(enviroment: string) {
        setEnviromentSelected(enviroment);

        if (enviroment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant => plant.environments.includes(enviroment));

        setFilteredPlants(filtered);
    }
    function handleFecthMore(distance: number) {
        if (distance < 1) {
            return;
        }
        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }
    function handlePlantSelect(plant: PlantProps) {
        navigate('PlantSave', { plant });

    }
    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if (!data) {
            return setLoading(true);
        }
        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }
        setLoading(false);
        setLoadingMore(false);
    }

    useEffect(() => {
        async function fetchEnviroments() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }
        fetchEnviroments();

    }, []);

    useEffect(() => {
        fetchPlants();

    }, []);

    if (loading)
        return <Load />
    return (

        <S.Container>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ padding: 30 }}>
                <Header />
                <Text>Em qual ambiente </Text>
                <Text>você quer colocar sua planta?</Text>
            </View>


            <S.ListEnviromentView>
                <S.ListEnviroments data={enviroments} renderItem={({ item }) => (
                    <EnviromentButton title={item.title} active={item.key === enviromentSelected}
                        onPress={() => handleEnviromentSelected(item.key)} />)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </S.ListEnviromentView>

            <S.ListPlantsView>
                <S.ListPlants keyExtractor={(item: any) => String(item.id)} data={filteredPlants} renderItem={({ item }) => (
                    <PlantCardPrimary
                        data={item}
                        onPress={() => handlePlantSelect(item)}
                    />)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFecthMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore
                            ? <ActivityIndicator color={colors.green} />
                            : <></>
                    }
                />
            </S.ListPlantsView>


        </S.Container>
    )
}

export default PlantSelect;