import {api} from './api.js';
/*--------------VIEW---------------*/
const View = (() => {

    const render = (ele,content) =>{
        ele.innerHTML = content;
    };

    const createCourse = (array) =>{
        let render = "";
        let courseType = "Elective";
        array.forEach((course) =>{
            if(course.required ==true){
                courseType = "Compulsory";
            }
            else{
                courseType = "Elective";
            }
            render =+ `<li>
            <p>${course.courseName}</p>
            <p>Course Type: ${courseType}</p>
            <p>Course Credit: ${course.credit}</p>
            </li>`;
        })
        return render;
    };

    return {
        render,
        createCourse,
    };
})();


/*--------------MODEL---------------*/
const Model = ((api,view) =>{
    // class Course{
    //     constructor(id, name, required, credit){
    //         this.courseId = id;
    //         this.courseName = name;
    //         this.required = required;
    //         this.credit = credit;
    //     }
    // }

    class State{
        #courseList = [];

        get courseList(){
            return this.#courseList;
        }

        set courseList(list){
            this.#courseList = [...list];

            const availableCourse = document.querySelector('#availableCourse');
            const tmp = view.createCourse(this.#courseList);
            view.render(availableCourse, tmp);
        }
    }

    const getCourseList = api.getCourses;
    
    return {
        getCourseList,
        State,
    };
})(api,View);


/*--------------CONTROLLER---------------*/
const Controller = ((model) =>{
    const state = new model.State();
    const init = () =>{
        model.getCourseList().then((courselist) =>{
            state.courseList = [...courselist];
        });
        
    };
    return {
        init,
    }

})(Model);

Controller.init();


