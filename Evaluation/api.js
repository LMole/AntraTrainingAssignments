export const api= (() => {
    const baseUrl = 'http://localhost:4232';
    const getCourses = () => fetch(baseUrl+'/courseList').then((response) => response.json());
    
    let courses = [];
    const courseArray = (()=>{
        fetch(baseUrl+'/courseList').then((response) => response.json()).then((data) => courses.push(data));
    })();
    
    console.log(courses);



    return {
        getCourses,
        courses,
    };

})();