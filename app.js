var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btn = document.querySelector('.remove_all')

var tags = []

function renderTags(){
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fas  fa-times" onclick="removeTag(${i})"></i>
                            </li>
        `
    }
    content.appendChild(input)
    input.focus()
}
function removeTag(index){
    tags.splice(index,1)
    renderTags()
}

renderTags()

input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        renderTags()
    }else if(event.key == 'Escape'){
        removeTag()
        renderTags()
    }
    
})

btn.addEventListener('click',function(){
    tags = []
    renderTags()
})




// var topics = [
//     {
//         topic:"Font-end",
//         courses:[
//             {
//                 id: 1,
//                 title: "HTML,CSS"
//             },
//             {
//                 id:2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id:1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "Ruby"
//             }
//         ]
//     }
// ]
// var newCourses = topics.reduce(function(course,currentValue){
//     return course.concat(currentValue.courses)
// }, [])

// console.log(newCourses)