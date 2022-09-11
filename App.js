import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



import HomeScreen from "./components/HomeScreen.jsx"
import DetailScreen from "./components/DetailScreen.jsx"
import AddSongScreen from './components/AddSongScreen.jsx';
import MenuScreen from './components/MenuScreen.jsx';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    //<View style={styles.container}>
      <NavigationContainer>
        
          <Tab.Navigator
            //screenOptions={{
              //labelStyle: { fontSize: 20 }
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'Add Song') {
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                  } else if (route.name === "Menu"){
                    iconName = focused ? 'menu' : 'menu';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#3a3b42',
                tabBarInactiveTintColor: 'gray',
              })}
              //get this to work...
              style={styles.menuBar}
            //}}
          >
            {/*// Home === Menu*/}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add Song" component={AddSongScreen} />
            <Tab.Screen name="Details" component={DetailScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />

          </Tab.Navigator>
        </NavigationContainer>
      //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "space-between",
    backgroundColor: "#3a3b42",
    //padding: 20,
    //margin: 10,
  },
  menuBar: {
    margin: 20
  }
})