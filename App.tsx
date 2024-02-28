import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import StudentsScreen from "./Screens/StudentsScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import CreateScreen from "./Screens/CreateScreen";
import EditScreen from "./Screens/EditScreen";
import ChartScreen from "./Screens/ChartScreen";
import {Chart} from "chart.js";

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
            <Stack.Screen name="Student Details" component={DetailsScreen}/>
            {}
            <Stack.Screen name="Add Student" component={CreateScreen}/>
            {}
            <Stack.Screen name="Edit Student" component={EditScreen}/>
            {}
            <Stack.Screen name="Grades" component={ChartScreen}/>
            {}
        </Stack.Navigator>
      </NavigationContainer>
  );
}