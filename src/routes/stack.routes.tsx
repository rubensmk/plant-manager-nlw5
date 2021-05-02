import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import colors from '../styles/colors';
import PlantSave from '../screens/PlantSave';
import MyPlants from '../screens/MyPlants';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
    <stackRoutes.Navigator headerMode="none" screenOptions={{
        cardStyle: {
            backgroundColor: colors.white,
        }
    }}>
        <stackRoutes.Screen name="Welcome" component={Welcome} />
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
        <stackRoutes.Screen name="Confirmation" component={Confirmation} />
        <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
        <stackRoutes.Screen name="PlantSave" component={PlantSave} />
        <stackRoutes.Screen name="MyPlants" component={MyPlants} />

    </stackRoutes.Navigator>
);

export default AppRoute;