import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MatchProvider } from "./src/utils/GlobalState";
import Landing from "./src/screens/Landing";
import Cassette from "./src/screens/Cassette";

const Stack = createStackNavigator();

function App() {
  return (
    <MatchProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Matches" component={Landing} />
          <Stack.Screen name="Cassette" component={Cassette} />
        </Stack.Navigator>
      </NavigationContainer>
    </MatchProvider>
  );
}

export default App;
