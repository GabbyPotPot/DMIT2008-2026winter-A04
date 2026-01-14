/*
Enter JS here


HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1. select topic and new topic form
let topicList = document.querySelector(".topics-list")
let newTopicForm = document.querySelector(".new-topic-form")

// 5. create function addTopicPage that will take a name and topicListElement
const addTopicPage = (topicName, topicListElement) => {
    
    // 6. create a new inner list element and update the html
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
     </li>`

     topicListElement.innerHTML += newTopicElement
}


// 2. add event listner, stop default form submit event 
newTopicForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault()
        
        // 3. grab input element and extract/store value
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)
        
        // 4. validation - check for empty, use bootstrap classes for user feedback
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
        // 6b. call function to event listner
        addTopicPage(newTopic, topicList)
    }
)

