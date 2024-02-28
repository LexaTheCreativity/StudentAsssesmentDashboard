import {DateType} from "react-native-ui-datepicker";

type StudentType = {
    id: string,
    DOB: string,
    Grade: string,
    Score: number,
    classID: string,
    className: string,
    fName: string,
    lName: string
};

const StudentTypeDefault: StudentType = {
    id: "",
    DOB: "",
    Grade: "",
    Score: 0,
    classID: "",
    className: "",
    fName: "",
    lName: ""
};

export {StudentType, StudentTypeDefault};