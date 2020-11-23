import React from 'react';

import SingIn from '../screens/Singin';
import { createStackNavigator }  from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Navigator screenOptions={{headerShown:false}}>
        <Screen name="SignIn" component={SingIn} />
    </Navigator>
);

export default AuthRoutes;