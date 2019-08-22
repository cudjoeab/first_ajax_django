document.addEventListener("DOMContentLoaded", function() {
    
    let rootButton = document.getElementById('request-root')
    let pingButton = document.getElementById('ping-button')
    // creating a section in HTML 
    let section = document.createElement('section')
    let body = document.querySelector('body')
    body.appendChild(section)


    rootButton.addEventListener('click', () => {
        let request = axios.get('http://intro-ajax-api.herokuapp.com/')
                           .then(function(response){
        console.log('-- request received --')
        }); 
    });

    pingButton.addEventListener('click', () => {
        let request = 
        axios.get('http://intro-ajax-api.herokuapp.com/ping')
             .then(function(response){
                console.log(response.data)
                const pingText = document.createElement('h2')
                pingText.innerHTML = response.data    
                section.appendChild(pingText)
             })
             .catch(function(error){
                 const errorText = document.createElement('h2')
                 errorText.innerHTML = "Ouf... There seems to be an error. Sorry!"
                 section.appendChild(errorText) 
             })
             .then(function(response){
                 const endText = document.createElement('h2')
                 endText.innerHTML = "That's all for now folks!"
                 section.appendChild(endText)
             });


    });
    

    
});