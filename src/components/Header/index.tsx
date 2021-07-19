import React, { useEffect, useState } from 'react';
import { Container, Greetings, Name, Avatar } from './styles';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Header: React.FC = () => {

    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '');
        }
        loadStorageUserName();
    }, []);

    return (
        <Container>
            <View>
                <Greetings>Olá</Greetings>
                <Name>{userName}</Name>
            </View>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/52255226?v=4' }} />
        </Container>
    )
};

export default Header