console.log("This is index.js");


const data = [{
    name: 'Rohan Das',
    age: 18,
    city: 'Kolkata',
    language: 'Python',
    framework: 'Django',
    image: 'https://randomuser.me/api/portraits/men/77.jpg'
},
{
    name: 'Shubham Das',
    age: 28,
    city: 'Bengaluru',
    language: 'Javascript',
    framework: 'Angular',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
},

{
    name: 'Samim Das',
    age: 26,
    city: 'Delhi',
    language: 'Java',
    framework: 'Spring',
    image: 'https://randomuser.me/api/portraits/men/25.jpg'
},

{
    name: 'Bitu Das',
    age: 25,
    city: 'Patna',
    language: 'Python',
    framework: 'Flask',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
}
]

//cv Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                {
                    value: profiles[nextIndex++], done: false
                } :
                { done: true }
        }
    }
}
// Button listener

const next = document.getElementById('next');

next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }
}