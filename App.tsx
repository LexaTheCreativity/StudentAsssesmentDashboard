import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import StudentsScreen from "./Screens/StudentsScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import InfoScreen from "./Screens/InfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name="Dashboard" component={HomeScreen}/>
            {}
            <Stack.Screen name="Students" component={StudentsScreen}/>
            {}
            <Stack.Screen name="Courses" component={CoursesScreen}/>
            {}
            <Stack.Screen name="Student Info" component={InfoScreen}/>
            {}
        </Stack.Navigator>
      </NavigationContainer>
  );
}