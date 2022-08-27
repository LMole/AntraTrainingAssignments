export const api= (() => {
    const baseUrl = 'http://localhost:4232';
    //this fetch the course data from the server
    const getCourses = () => fetch(baseUrl+'/courseList').then((response) => response.json());

    let courses = [];
    //this creates an array of courses available 
    const courseArray = (()=>{
        fetch(baseUrl+'/courseList').then((response) => response.json()).then((data) => courses.push(data));
    })();

    return {
        getCourses,
        courses,
    };

})();