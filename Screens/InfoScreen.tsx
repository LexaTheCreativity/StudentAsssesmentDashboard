import {Text, View} from "react-native";
import {styles} from "../styles";
import {StudentType} from "../studentType";

export default function InfoScreen({route})
{
    const student = route.params.student as StudentType;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Name: {student.lName}, {student.fName}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Date of birth: {student.DOB.toString()}</Text>
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
        </View>
    )
}