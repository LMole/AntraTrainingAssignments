export const api= (() => {
    const baseUrl = 'http://localhost:4232';
    const getCourses = () => fetch(baseUrl+'/courseList').then((response) => response.json());


    return {
        getCourses,
    };

})();