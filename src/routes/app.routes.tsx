import React from 'react';

import Home from '../screens/Home';
import SignOut from '../screens/SignOut';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Drawer from './drawer';

const DrawerStack = createDrawerNavigator();

const AppRoutes: React.FC = () => (          
            <DrawerStack.Navigator
                //@ts-ignore
                drawerContent={(props) => <Drawer {...props} />}
                initialRouteName="Donates"
                //@ts-ignore
                headerMode="none"
                unmountInactiveRoutes={true}
            >
                <DrawerStack.Screen name="Home" component={Home} />
                <DrawerStack.Screen name="SignOut" component={SignOut} />
            </DrawerStack.Navigator>          
);

export default AppRoutes;