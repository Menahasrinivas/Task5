//Question 1:
//for the given JSON iterate over all for loops
//for in loop
var mydetails = {
"Name":"S.Menaha",
"Age":31,
"Degree":"B.Tech",
"Address":"Tharamani,Chennai",
"Number":"+919677058333",
};

for (var i in mydetails){
console.log(i,mydetails[i]);
}
/************************************************/
//2nd loop
//for loop
var mydetails1 = [{
"Name":"S.Menaha",
"Age":31,
"Degree":"B.Tech",
"Address":"Tharamani,Chennai",
"Number":"+919677058333"

}]
for(var i=0;i<mydetails1.length;i++){
    console.log(mydetails1[i]);
    
}

/*******************************************/
//3rd for of loop:

const result23 = [10,20,30,40,50]
for(var newresult23 of result23){
    console.log(newresult23);
}
/*******************************************/
//4th for each loop
var result24 = [100,101,102,103,104,105]
result24.forEach(numbers=>{console.log(numbers)});


//Q.2.
const myResume={
    "basics": {
        "name": "Menaha S",
        "email": "menaha.srini@gamil.com",
        "phone": 9677058333,
        "degree": "B.Tech",
        "location": {
          "address": "1,Welcome city,Taramani",
          "postalCode": 600030,
          "city": "Chennai",
          "state": "Tamilnadu",
          "country": "India"
        },
        "profiles": [
          {
            "website": "https://www.linkedin.com/in/menaha-s",
            "github":"https://github.com/Menahasrinivas"
          }
        ]
      },
      
      "education": [
        {
          "institution": "Maharaja Engineering College",
          "department": "Information Technology",
          "studyType": "fulltime",
          "batch start year": 2009,
          "batch end year": 2013,
          "CGPA": 7.4,
        }
      ],
      "skills": [
        {
          "name": "javascript",
          "level": "beginer",
          
        }
      ],
      "languages": [
        {
          "language": "Tamil,Enlish",
        }
      ],
      "interests": [
        {
          "name": "Playing shuttle,Story reading,",
        }
      ]
    }
    console.log(myResume);
// /*********************************************/