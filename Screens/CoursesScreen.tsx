import {FlatList, Pressable, Text, View} from "react-native";
import {styles} from "../styles";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseConfig";

export default function CoursesScreen({navigation})
{
    const [courses, setCourses] = useState<string[]>([""]);

    useEffect(() => {
        const fetchStudents = async () => {
            const collectionRef = collection(db, 'students2');
            const documentsSnap = await getDocs(collectionRef);

            setCourses(documentsSnap.docs.map((entry) => (
                entry.data().className
            )));
        };

        fetchStudents().then().catch(() => { console.error('Error fetching data.') });
    }, []);

    const renderCourse = ({item: course}) => (
        <View style={styles.container}>
            <Pressable style={styles.box} onPress={() => {navigation.navigate('Grades', {course: course})}}>
                <Text style={styles.text}>
                    {course}
                </Text>
            </Pressable>
        </View>
    );

    const coursesSet = new Set(courses);
    const uniqueCourses = Array.from(coursesSet);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={uniqueCourses}
                renderItem={renderCourse}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}