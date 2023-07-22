const subscribe = document.getElementById('subscribe');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const topic = document.getElementById('topic');


subscribe.addEventListener('submit', e=>{
    e.preventDefault();

    const body = {
        firstName: fname.value,
        lastName: lname.value,
        email: email.value,
        topicId: Number(topic.value)
    } 
    
    fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: JSON.stringify(body),

    })
   console.log(body);
})

