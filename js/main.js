
document.addEventListener("DOMContentLoaded", (event) => {
            document.addEventListener("submit", (event) => {
            event.preventDefault(); //prevents default action of "submit" event
          
              let userInput = document.querySelector("input[id='input']");
              let searchQuery = userInput.value;
          
              if (searchQuery.length !== 0) { //test to be sure that user entered a value
                userInput.value = ''; //erases entered values
                fetch('seattle.json')
                .then(function (response) {
                      return response.json();
                  })
                  .then(function (data) {
                    appendData(data);
                  }).catch(function (error) {
                      console.error('An error occurred while retrieving the data');
                      console.error(error);
                  });
              }
          
              function appendData(data) {
              var resultsFor = document.getElementById("results-for");
              var h5 = document.createElement("h5");
              h5.innerHTML = "Results for Seattle, WA";
              resultsFor.appendChild(h5);
              var searchResults = document.getElementById("search-results");
              for (var i = 0; i < data.length; i++) {//appends each result to page
                  var div = document.createElement("div");
                  div.innerHTML = data[i].name + ' ' + data[i].summary;
                  searchResults.appendChild(div);
              }
            }
              })
          })