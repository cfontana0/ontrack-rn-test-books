import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import ScreenRouter from './src/screens/Router.js'
import { default as customTheme } from './custom-theme.json'

export default function App () {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva["light"], ...customTheme }}>
          <NavigationContainer>
            <ScreenRouter/>
          </NavigationContainer>
        </ApplicationProvider>
    </Provider>
  )
};
