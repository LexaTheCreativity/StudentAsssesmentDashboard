
type StudentType = {
    id: string,
    DOB: Date,
    Grade: string,
    Score: number,
    classID: string,
    className: string,
    fName: string,
    lName: string
};

const StudentTypeDefault: StudentType = {
    id: "",
    DOB: new Date(),
    Grade: "",
    Score: 0,
    classID: "",
    className: "",
    fName: "",
    lName: ""
};

export {StudentType, StudentTypeDefault};