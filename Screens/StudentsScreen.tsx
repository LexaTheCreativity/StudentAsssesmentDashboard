import {FlatList, Pressable, Text, View} from "react-native";
import {styles} from "../styles";
import {StudentType, StudentTypeDefault} from "../studentType";
import {useState, useEffect} from "react";
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebaseConfig';

export default function StudentsScreen({navigation})
{
    const [students, setStudents] = useState<StudentType[]>([StudentTypeDefault]);

    useEffect(() => {
        const fetch = async () => {
            const collectionRef = collection(db, 'students');
            const documentsSnap = await getDocs(collectionRef);

            setStudents(documentsSnap.docs.map((entry) => ({
                DOB: entry.data().DOB.toDate().toLocaleString(
                    'en-GB', {month: "short", day: "numeric", year: "numeric"
                    }),
                Grade: entry.data().Grade,
                Score: entry.data().Score,
                classID: entry.data().classID,
                className: entry.data().className,
                fName: entry.data().fName,
                lName: entry.data().lName
            })));
        };

        fetch().then().catch(() => {console.log('Error fetching data.')});
    }, []);

    const renderItem = ({item: student}) => (
        <View style={styles.container}>
            <Pressable style={styles.box} onPress={() => {}}>
                <Text style={styles.text}>
                    {student.lName}, {student.fName}
                </Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={students}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}