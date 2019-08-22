document.addEventListener("DOMContentLoaded", function() {
    
    let rootButton = document.getElementById('request-root');
    let pingButton = document.getElementById('ping-button');
    let countButton = document.getElementById('count-button'); 
    let timeButton = document.getElementById('time-button');
    // creating a section in HTML 
    let section = document.createElement('section');
    let body = document.querySelector('body'); 
    body.appendChild(section);


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

    countButton.addEventListener('click', () => {
        let request = 
        axios.get('http://intro-ajax-api.herokuapp.com/count')
             .then(function(response){
                console.log(response.data)
                const countText = document.createElement('h2')
                countText.innerHTML = response.data    
                section.appendChild(countText)
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

    timeButton.addEventListener('click', () => {
        let request = 
        axios.get('http://intro-ajax-api.herokuapp.com/time', {
            params: { timezone : 'Asia/Kolkata'}
        })
             .then(function(response){
                console.log(response.data)
                const timeText = document.createElement('h2')
                timeText.innerHTML = response.data    
                section.appendChild(timeText)
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