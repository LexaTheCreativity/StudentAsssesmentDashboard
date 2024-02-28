import {Pressable, Text, View} from "react-native";
import {styles} from "../styles";
import {StudentType} from "../studentType";
import {AntDesign} from "@expo/vector-icons";
import {doc, deleteDoc, setDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';

export default function InfoScreen({navigation, route})
{
    const student = route.params.student as StudentType;

    const handleDelete = async () => {
        try
        {
            await deleteDoc(doc(db, 'students2', student.id));
            console.log('Deleted student: ', student);
        }
        catch (error)
        {
            console.log('Error, could not delete student: ', student);
        }

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Name: {student.lName}, {student.fName}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Date of birth: {student.DOB}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Class Code: {student.classID}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Class Name: {student.className}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Score: {student.Score}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Grade: {student.Grade}</Text>
            </View>
            <Pressable style={[styles.btn, {backgroundColor:'#e32d14'}]} onPress={handleDelete}>
                <AntDesign name="deleteuser" size={26} color="white"/>
            </Pressable>
        </View>
    )
}