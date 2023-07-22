


const publishBtn = document.getElementById("button");
const title = document.getElementById('title');
const publisher = document.getElementById('publisher');
const topic = document.getElementById('topic')


publishBtn.addEventListener('click',()=>{
    const body = {
        publisherName: publisher.value,
        topicId: Number(topic.value),
        blog: tinyMCE.activeEditor.getContent(),
        title: title.value
    }
    fetch('http://localhost:3000/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body),
      })
        
        

    // $.ajax({
    //     type: 'POST',
    //     url: 'http://localhost:3000/publish',
    //     contentType:'application/json',
    //     data: JSON.stringify(body),
    //     success: (data)=>{
    //         console.log('successful')
    //     },
    //     error:(error)=>{
    //         console.error('Error',error)
    //     },
    // })
})