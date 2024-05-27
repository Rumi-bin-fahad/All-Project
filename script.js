// script.js
const assignments = [
    {
        name: 'Text Editor',
        description: 'Text Editor (features incluiding, bold, italic or much more).',
        date: '2024-05-27',
        time: '10:00 AM',
        image: 'https://i.pinimg.com/736x/ae/74/f9/ae74f938c352134d6d6aede87eb6a689.jpg',
        github: 'https://github.com/Rumi-bin-fahad/JavaScript-Exercise/tree/main/text_editor',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/text_editor/index.html'
    },
    {
        name: 'Age Calculator',
        description: 'A programme that calculate user age and show user date in sec,.',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://mycreditunion.gov/sites/default/files/styles/to_webp/public/toolkit-graphics/fin-resources_toolbox.jpg.webp?itok=pFMBvuE4',
        github: 'https://github.com/Rumi-bin-fahad/JavaScript-Exercise/tree/main/age-calculator',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/age-calculator/index.html'
    },
    {
        name: 'Attendence Checker',
        description: 'Programme that check user attendence.',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://www.lystloc.com/blog/wp-content/uploads/2023/08/8-things-to-be-considered-while-choosing-a-labor-attendance-app.webp',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/attendence-checker/index.html'
    },
    {
        name: 'Digital Clock',
        description: 'Digital Clock with Beautiful UI',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://bigtimeclocks.biz/cdn/shop/articles/history-of-digital-clocks_1000x.jpg?v=1614097301',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/Digital-clock/index.html'
    },
    {
        name: 'Janwar Online',
        description: 'Event listner and its methods',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://www.creativefabrica.com/wp-content/uploads/2022/12/12/Cute-Cow-Cartoon-Kawaii-Chibi-Hyper-Realistic-Intricate-Detail-Graphic-51737523-1.png',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/EventListner/index.html'
    },
    {
        name: 'Color Picker',
        description: 'Color picker with range',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://colorslurp.com/_ipx/f_png&q_85&s_3072x3398/images/home-hero-image.png',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/function-colorPicker/index.html'
    },
    {
        name: 'To-do Application ',
        description: 'Task Managemenet, with edit delete button',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAeK31zBRZRZBPBh8FKO-mwlxhRmR7hGq-sHM1u6aw&s',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/Dom%20todo%20app/index.html'
    },
    {
        name: 'Expense App',
        description: 'Expense app, tracking and manage history of user payments',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xa_-VXGioQOob4eO6ojTfmudvweOuZVM5C2DRb9cFA&s',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/index.html'
    },
    {
        name: 'Asan Khatta',
        description: 'Finance App ,manage user payment history and transcation',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY3qiD7LHrvFSYK69HwBNE3w91Dvl7X8wFHcBION-3Q&s',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html'
    },
    {
        name: 'Etsa Website',
        description: 'Etsa Website Clone, Sections, nav-bar, and hero section',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/Etsa/'
    },
    {
        name: 'Voting System',
        description: 'Voting System Includes If else condition and much more',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://rejolut.com/wp-content/uploads/2022/02/voting7.png',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/voting-system/'
    },
    {
        name: 'Pepsi Clone',
        description: 'Pepsi Website Clone with some special animation and hover effects',
        date: '2024-06-01',
        time: '2:00 PM',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIokF91Y095jbOZuhLTTFfAmNtufjokQXvVePC_CyLqQ&s',
        github: 'https://github.com/user/assignment2',
        demo: 'https://rumi-bin-fahad.github.io/Pepsi-clone/'
    },
    // Add more assignments here...
];

function createCard(assignment) {
    return `
        <div class="card">
            <img src="${assignment.image}" alt="${assignment.name}">
            <div class="card-content">
                <h2>${assignment.name}</h2>
                <p>${assignment.description}</p>
                <p class="date-time">${assignment.date} at ${assignment.time}</p>
                <div class="buttons">
                    <a href="${assignment.github}" target="_blank">View GitHub Code</a>
                    <a href="${assignment.demo}" target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    `;
}

const assignmentsContainer = document.getElementById('assignments');
assignments.forEach(assignment => {
    assignmentsContainer.innerHTML += createCard(assignment);
});
