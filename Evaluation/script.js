import {api} from './api.js';

/*--------------VIEW---------------*/
const View = (() => {

    const render = (ele,content) =>{
        ele.innerHTML = content;
    };

    //this creates a list item for each course
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
            //console.log(this.#courseList);

            const availableCourse = document.querySelector('#availableCourse');
            const tmp = view.createCourse(this.#courseList);
            view.render(availableCourse, tmp);
        }

        addCourse(list){
            const availableCourse = document.querySelector('#selectedCourse');
            const tmp = view.createCourse(list);
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
    let credits = 0;

    //this sets up the initial state for the course list
    const init = () =>{
        model.getCourses().then((courselist) =>{
            state.courseList = [...courselist];
        });
    };

    //this updates the credits as user selects a course from the available course list
    const updateCredits = () =>{
        credits =0; //to reset credits for counting

        selected.forEach(s =>{ 
            credits +=s.credit;
        });

        if(credits >18){
            alert("You can only choose up to 18 credits in one semester.");
            return false; //fail to add the course
        }
        let totalCredits = document.getElementById('credits');
        totalCredits.innerHTML = `Total Credits: ${credits}`;
        return true;
    };


    //this allows users to select courses from the list of available courses
    const selectCourse = () =>{
        const classList = document.querySelector('#availableCourse');

        classList.addEventListener("click", ((event)=>{
            let selecting = document.querySelectorAll('li')[event.target.id-1]; //get the element

            if(!selected.find(element => element.courseId == event.target.id)){ //check if the course is already been selected
                let c = model.courses[0].find(element => element.courseId == event.target.id);
                selected.push(c); //add the course to the selected list

                if(!updateCredits()){ //check if overload
                    selected.splice(selected.indexOf(c),1);
                }else{ //not overload
                    selecting.style.background = "deepskyblue";
                    //console.log(selected);
                }
            }else{ //unselect class
                if(event.target.id %2 ==0){
                    selecting.style.background = 'rgb(221,239,221)';
                }else{
                    selecting.style.background = 'white';
                }
                let c = selected.find(element => element.courseId == event.target.id);
                selected.splice(selected.indexOf(c),1); //remove the course from the selected list
            }
            updateCredits();
        }));
    }

    const toSelect = () =>{
        const btn = document.getElementById('select');
        
        btn.addEventListener('click', function(){
            if(confirm("You have chosen " + credits +" credits for this semester. You cannot change once you submit. Do you want to confirm?") == true){
                state.addCourse(selected);
                model.getCourses().then((courselist) =>{
                    //console.log(courselist);
                    //remove all selected courses from the initial courselist
                    const newCourses = courselist.filter(function(c){
                        return !selected.find(function(s){
                            return (c.courseId === s.courseId);
                        })
                    });
                    //console.log(newCourses);
                    state.courseList = [...newCourses];
                });
                btn.disabled = true;  
            }
        })
    }

    const onload = () =>{
        init();
        selectCourse();
        toSelect();
    };

    return {
        onload,
    }

})(Model);

Controller.onload();


