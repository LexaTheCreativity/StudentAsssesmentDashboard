import {FlatList, Pressable, Text, View} from "react-native";
import {styles} from "../styles";
import {StudentType, StudentTypeDefault} from "../studentType";
import {useState, useEffect} from "react";
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebaseConfig';
import {AntDesign} from "@expo/vector-icons";

export default function StudentsScreen({navigation}) {
    const [students, setStudents] = useState<StudentType[]>([StudentTypeDefault]);

    useEffect(() => {
        const fetchStudents = async () => {
            const collectionRef = collection(db, 'students2');
            const documentsSnap = await getDocs(collectionRef);

            setStudents(documentsSnap.docs.map((entry) => ({
                id: entry.id,
                DOB: entry.data().DOB,
                Grade: entry.data().Grade,
                Score: entry.data().Score,
                classID: entry.data().classID,
                className: entry.data().className,
                fName: entry.data().fName,
                lName: entry.data().lName,
            })));
        };

        fetchStudents().then().catch(() => { console.error('Error fetching data.') });
    }, [students]);

    const renderStudent = ({item: student}) => (
        <View style={styles.container}>
            <Pressable style={styles.box} onPress={() => {
                navigation.navigate('Student Details', {student: student})
            }}>
                <Text style={styles.text}>
                    {student.lName}, {student.fName}
                </Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={students}
                renderItem={renderStudent}
                keyExtractor={(item, index) => index.toString()}
            />
            <Pressable style={[styles.btn, {backgroundColor:'#57c926'}]} onPress={() => navigation.navigate('Add Student')}>
                <AntDesign name="adduser" size={26} color="white"/>
            </Pressable>
        </View>
    )
}