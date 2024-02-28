import {Alert, Pressable, Text, View} from "react-native";
import {styles} from "../styles";
import {StudentType} from "../studentType";
import {AntDesign} from "@expo/vector-icons";
import {doc, deleteDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';

export default function DetailsScreen({navigation, route})
{
    const student = route.params.student as StudentType;

    const handleDelete = async () => {
        try
        {
            await deleteDoc(doc(db, 'students2', student.id));
            Alert.alert('Success', 'Student deleted successfully!');
            console.log('Deleted student: ', student);
        }
        catch (error)
        {
            Alert.alert('Error', 'Failed to delete student!');
            console.log('Failed to delete student: ', student);
        }

        navigation.goBack();
    };

    const handleEdit = () => {
        navigation.navigate('Edit Student', {student});
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Student ID: {student.id}</Text>
            </View>
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
            <Pressable style={[styles.box, {backgroundColor:'#1ebeeb'}]} onPress={handleEdit}>
                <Text style={styles.text}>Edit</Text>
            </Pressable>
            <Pressable style={[styles.btn, {backgroundColor:'#e32d14'}]} onPress={handleDelete}>
                <AntDesign name="deleteuser" size={26} color="white"/>
            </Pressable>
        </View>
    )
}