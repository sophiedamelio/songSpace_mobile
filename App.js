import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./components/HomeScreen.jsx"
import DetailScreen from "./components/DetailScreen.jsx"
import AddSongScreen from './components/AddSongScreen.jsx';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    //<PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            labelStyle: { fontSize: 20 }
          }}
        >
          {/*// Home === Menu*/}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add Song" component={AddSongScreen} />
          {/*<Tab.Screen name="Details" component={DetailScreen} />*/}

        </Tab.Navigator>
      </NavigationContainer>
    //</PaperProvider>
  );
}