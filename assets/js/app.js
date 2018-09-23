$( document ).ready( AppReady );

function AppReady() {
    console.log( "App Ready!" );
    getStudentData();
}

function createStudentItem(studentObject){
    console.log('Create Student Item Triggered');
    const studentContainer = $("<div>",{
        'class': 'studentEntry'
    });
    const name = $('<div>', {
        'class': 'name',
        text: studentObject.name
    });
    const grade = $('<div>', {
        'class': 'grade',
        text: studentObject.grade
    });
    const course = $('<div>', {
        'class': 'course',
        text: studentObject.course_name
    });
    studentContainer.append(name, grade, course);
    return studentContainer;
}

function renderAllStudents(studentArray){
    const studentElements = [];
    console.log('Render All Students Function Triggered');
    for(let i = 0; i < studentArray.length; i++){
        let element = createStudentItem(studentArray[i]);
        studentElements.push(element);
    }
    $('#displayStudents').append(studentElements);
}

function getStudentData(){
    $.ajax({
        url: 'server/getStudents.php',
        dataType: 'json',
        method: 'get',

        success: function(response){
            if(response.students.length > 0){
            renderAllStudents(response.students);
            }
        },

        error: function(){
            console.log('Server Connection Error')
        }
    })
    
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