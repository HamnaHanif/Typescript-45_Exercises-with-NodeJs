//ASSIGNMENT NO 21 :
//They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.


interface itcourse {
      courseName: string;
      location: string;
      onsiteStudents: number;
}

let itCourse = {
    courseName : "Typescript and javacript",
    location : "Governor House",
    onsiteStudent : 5000
};

console.log(itCourse);