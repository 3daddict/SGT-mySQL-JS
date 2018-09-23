var data = {
    "students": [
        {
            id: 1,
            name: 'Michael Salvati',
            grade: 89,
            course_name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Evan Carter',
            grade: 99,
            course_name: 'Coloring'
        },
        {
            id: 3,
            name: 'Yajaira Mora',
            grade: 90,
            course_name: 'Politics'
        },
    ]
}

$( document ).ready( AppReady );

function AppReady() {
    console.log( "App Ready!" );
    getTaskData();

}

function createTaskItem(studentObject){
    console.log('Create Task Item Triggered');
    const studentContainer = $("<div>",{
        'class': 'studentEntry'
    });
    const name = $('<div', {
        'class': 'name',
        text: studentObject.name
    });
    const grade = $('<div', {
        'class': 'grade',
        text: studentObject.grade
    });
    const course = $('<div', {
        'class': 'course',
        text: studentObject.course_name
    });
}

function renderAllTasks(studentArray){
    const studentElements = [];
    console.log('Render All Tasks Function Triggered');
    for(let i = 0; i < studentArray.length; i++){
        let element = createTaskItem(studentArray[i]);
        studentElements.push(element);
    }
    $('#displayStudents').append(studentElements);
}

function getTaskData(){
    renderAllTasks(data.students);
}












// function ajaxReadCall() {
//     $.ajax({
//         url: 'http://mikedoescode.com/mikedoescodedb/',
//         dataType: 'json',
//         method: 'get',

//         sucess: function(response){
//             if(response.sgt_db.length > 0){
//                 console.log(response.sgt_db);
//             }
//         },
//         error: function(){
//             console.log('Server Connection Error');
//         }
//     })
// }