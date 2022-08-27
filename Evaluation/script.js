import {api} from './api.js';
/*--------------VIEW---------------*/
const View = (() => {

    const render = (ele,content) =>{
        ele.innerHTML = content;
    };

    const createCourse = (array) =>{
        let render = '';
        let courseType = "Elective";
        array.forEach((course) =>{
            if(course.required ==true){
                courseType = "Compulsory";
            }
            else{
                courseType = "Elective";
            }
            render += `<li id="${course.courseId}">
            ${course.courseName}<br>
            Course Type: ${courseType}<br>
            Course Credit: ${course.credit}
            </li>`;
        });
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
            console.log(this.#courseList);

            const availableCourse = document.querySelector('#availableCourse');
            const tmp = view.createCourse(this.#courseList);
            view.render(availableCourse, tmp);
        }
    }

    const {getCourses, courses} = api;
    
    return {
        getCourses,
        courses,
        State,
    };
})(api,View);


/*--------------CONTROLLER---------------*/
const Controller = ((model) =>{
    const state = new model.State();
    const selected = [];

    const init = () =>{
        model.getCourses().then((courselist) =>{
            state.courseList = [...courselist];
        });
    };

    const updateCredits = () =>{
        let credits = 0;
        
        let data = model.courses[0];
        selected.forEach(s =>{ 
            credits += data.find(element => element.courseId == s).credit;
            //console.log(credits);
        });
        let totalCredits = document.getElementById('credits');
        totalCredits.innerHTML = `Total Credits: ${credits}`;
    };

    const selectCourse = () =>{
        const classList = document.querySelector('#availableCourse');
        classList.addEventListener("click", ((event)=>{
            let selecting = document.querySelectorAll('li')[event.target.id-1];
            if(!selected.includes(event.target.id)){
                selecting.style.background = "deepskyblue";
                selected.push(event.target.id);
                console.log(selected);
            }else{
                if(event.target.id %2 ==0){
                    selecting.style.background = 'rgb(221,239,221)';
                }else{
                    selecting.style.background = 'white';
                }
                let index = selected.indexOf(+event.target.id);
                selected.splice(index,1);
            }

            updateCredits();
        }));
    }

    const onload = () =>{
        init();
        selectCourse();
    };
    return {
        onload,
    }

})(Model);

Controller.onload();


