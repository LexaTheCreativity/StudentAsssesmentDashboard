import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "./Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name="Dashboard" component={DashScreen}/>
            {}
            <Stack.Screen name="Students" component={DashScreen}/>
            {}
            <Stack.Screen name="Courses" component={DashScreen}/>
            {}
        </Stack.Navigator>
      </NavigationContainer>
  );
}