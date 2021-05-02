import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home.js'
import Detail from './Detail.js'

const Router = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  )
}

export default Router;
