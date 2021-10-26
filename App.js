import React from "react";
import { StyleSheet} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MatchProvider } from "./src/utils/GlobalState";
import Landing from "./src/screens/Landing";
import Cassette from "./src/screens/Cassette";
import Test from './src/screens/Test';


const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider style={styles.root}>
    <MatchProvider>
      <NavigationContainer >
        <Stack.Navigator
        initialRouteName="Landing"
        >        
          <Stack.Screen 
          name="Matches" 
          component={Landing} 
          options={{headerShown: false}}        
          />
          <Stack.Screen 
          name="Cassette"
          component={Cassette} 
          />
          <Stack.Screen 
          name="Test"
          component={Test} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MatchProvider>
     </SafeAreaProvider>
      );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
      }
});

export default App;
