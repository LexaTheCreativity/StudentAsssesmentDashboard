import {Pressable, Text, TextInput, View} from "react-native";
import {StudentType, StudentTypeDefault} from "../studentType";
import {useState} from "react";
import {styles} from "../styles";
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../firebaseConfig';

export default function CreateScreen({navigation, route}) {
    const [student, setStudent] = useState<StudentType>(StudentTypeDefault);

    const handleAdd = async () => {
        try
        {
            await setDoc(doc(db, 'students2', '3'), {
                DOB: student.DOB,
                Grade: student.Grade,
                Score: student.Score,
                classID: student.classID,
                className: student.className,
                fName: student.fName,
                lName: student.lName
            });
            console.log('Added student: ', student);
        }
        catch (error)
        {
            console.log('Error, could not add student: ', student);
        }

        navigation.goBack();
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
            <TextInput
                style={styles.input}
                placeholder="Grade"
                placeholderTextColor={'#f0ca84'}
                value={student.Grade}
                onChangeText={(text) => setStudent({...student, Grade: text})}
            />
            <Pressable style={styles.box} onPress={handleAdd}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>
    );
}