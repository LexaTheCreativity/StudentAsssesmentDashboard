import {Pressable, Text, TextInput, View} from "react-native";
import {StudentType, StudentTypeDefault} from "../studentType";
import {SetStateAction, useEffect, useState} from "react";
import {styles} from "../styles";

export default function CreateScreen({navigation, route}) {
    const [student, setStudent] = useState<StudentType>(StudentTypeDefault);

    const handleAdd = () => {
        console.log('Saved student DOB: ', student.DOB.toLocaleString());

        navigation.navigate('Students');
    };

    const handleNumericInput = (text: string) => {
        const numericText = text.replace(/[^0-9]/g, '');
        const numeric = parseInt(numericText, 10);
        setStudent({...student, Score: numeric});
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
                value={student.DOB}
                onChangeText={(text) => setStudent({ ...student, DOB: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Class ID"
                placeholderTextColor={'#f0ca84'}
                value={student.classID}
                onChangeText={(text) => setStudent({ ...student, classID: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Class Name"
                placeholderTextColor={'#f0ca84'}
                value={student.className}
                onChangeText={(text) => setStudent({ ...student, className: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Score"
                keyboardType={'numeric'}
                placeholderTextColor={'#f0ca84'}
                value={student.Score.toString()}
                onChangeText={(text) => handleNumericInput(text)}
            />
            <Pressable style={styles.box} onPress={handleAdd}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>
    );
}