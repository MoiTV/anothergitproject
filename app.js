const github = new Github;
const ui = new UI;
// Search input 
const searchUser = document.getElementById('searchUser');

// Search inpout event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});