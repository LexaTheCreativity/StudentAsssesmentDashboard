import {View} from "react-native";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebaseConfig";
import {styles} from "../styles";
import {BarChart} from 'react-native-gifted-charts';

export default function ChartScreen({navigation, route})
{
    const [chartData, setChartData] = useState([]);
    const courseName = route.params.course as string;

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, 'students2');
            const q = query(colRef, where("className", "==", courseName));
            const snapshots = await getDocs(q);
            const gradeCount = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0};

            snapshots.forEach((doc) => {
                const grade = doc.data().Grade;
                if (gradeCount.hasOwnProperty(grade))
                {
                    gradeCount[grade]++;
                }
            });

            const chartEntries = Object.entries(gradeCount).map(([label, value]) => ({
                label,
                value,
            }));

            setChartData(chartEntries);
        };

        fetchData().then().catch(() => { console.error('Error fetching data.') });
    }, []);

    return (
        <View style={styles.container}>
            {chartData && <BarChart
                data={chartData}
                width={350}
                height={300}
                barWidth={30}
                showYAxisIndices
                showXAxisIndices
                // showGradient
                frontColor={'#1B6BB0'}
                gradientColor={'#FFEEFE'}
            />}
        </View>
    )
}