import {Pressable, Text, View} from "react-native";
import {styles} from "../styles";

export default function HomeScreen({navigation})
{
    return (
        <View style={styles.container}>
            <Pressable style={styles.box} onPress={() => navigation.navigate('Students')}>
                <Text style={styles.text}>
                    Students
                </Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => navigation.navigate('Courses')}>
                <Text style={styles.text}>
                    Courses
                </Text>
            </Pressable>
        </View>
    )
}