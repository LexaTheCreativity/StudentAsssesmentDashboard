import {Pressable, Text, TextInput, View} from "react-native";
import {StudentType, StudentTypeDefault} from "../studentType";
import {useState} from "react";
import {styles} from "../styles";

export default function CreateScreen()
{
    const [student, setStudent] = useState<StudentType>(StudentTypeDefault);

    const handleAdd = () => {
        console.log('Saved student: ', student);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First name"
                placeholderTextColor={'#f0ca84'}
                value={student.fName}
                onChangeText={(text) => setStudent({ ...student, fName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Last name"
                placeholderTextColor={'#f0ca84'}
                value={student.lName}
                onChangeText={(text) => setStudent({ ...student, lName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of birth"
                placeholderTextColor={'#f0ca84'}
                value={student.lName}
                onChangeText={(text) => setStudent({ ...student, lName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of birth"
                placeholderTextColor={'#f0ca84'}
                value={student.lName}
                onChangeText={(text) => setStudent({ ...student, lName: text })}
            />
            <Pressable style={styles.box} onPress={() => {handleAdd}}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>
    );
}