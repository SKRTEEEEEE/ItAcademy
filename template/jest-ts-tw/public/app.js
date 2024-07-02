const baseURL = 'http://localhost:4001';
const domInjected = document.getElementById('domInj');
domInjected.innerHTML = 
`<p>This project was running in the port ${baseURL}</p>
<button onclick="testAlert()">Click here</button>`

const testAlert = () => {
    alert("Here come the aliens👾")
}

// Fetch tasks from the server
// async function initializeApp() {
    
// }

// initializeApp();
