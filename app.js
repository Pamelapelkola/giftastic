var dogbreed = []
var APIKey = "360mQxL6PAP16RJ66GYQTNUsm8YVCeg1";

//empty button
$("#breed-view").empty();
//on click create event in which the input submitted creates a button
//and is appended to webpage 
$("#add-breed").on("click", function (event) {
      event.preventDefault();

      var dbinput = $('#breed-input').val()
      var db = $("<button>").attr("data-name", dbinput);
      db.addClass('dogtype');
      db.text(dbinput);
      $('#breed-view').append(db);
      // input is pushed to empty array
      db.push(dogbreed);
      // input field is cleared
      $('#breed-input').val('');

      //assign attr after button click
      var dog = db.attr("data-name");
      //construct URL to search Giphy for users input


      var gifURL = ("https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=360mQxL6PAP16RJ66GYQTNUsm8YVCeg1&limit=10&offset=0&rating=G&lang=en");
      var gifanimateURL = ("https://media0.giphy.com/media/uSYQsJQWEv6O4/giphy.gif");
      var gifstillURL = ("https://media0.giphy.com/media/uSYQsJQWEv6O4/giphy_s.gif");

      //ajax call
      $.ajax({
            url: gifURL,
            method: "GET"
            //after the response comes back from API
      }).then(function (response) {
            //store an array of results in a variable 
            var results = response.data;
            console.log(results);
            //loop over results
            for (var i = 0; i < results.length; i++) {
                  var resultsDiv = $("<div>")
                  var resultsPone = $("<p>")
                  console.log(results[i].rating);

                  // Displaying the rating
                  resultsPone.text("Rated " + results[i].rating)
                  resultsDiv.append(resultsPone)
                  //create image tag for URL
                  var resultsImage = $("<img class='gifimage' data-state ='still'>")
                  //give image a src attribute of pulled results animate
                  resultsImage.attr('src', results[i].images.fixed_height_still.url)
                  resultsImage.attr('data-still', results[i].images.fixed_height_still.url)
                  resultsImage.attr('data-animate', results[i].images.fixed_height.url)
                  resultsDiv.append(resultsImage)


                  //append image to div #gif-images and prepend each subsequent gif
                  $('#gif-images').append(resultsDiv)
                  $('#gif-images').prepend(resultsDiv)
            }


            $(".gifimage").on("click", function() {
            
                  var state = $(this).attr('data-state');
                  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                  // Then, set the image's data-state to animate
                  // Else set src to the data-still value
                  if (state === 'still') {
                        
                    $(this).attr('src', $(this).attr('data-animate'));
                    $(this).attr('data-state', 'animate');
                  } else {
                    $(this).attr('src', $(this).attr('data-still'));
                    $(this).attr('data-state', 'still');
                  }
                });
            
          ;})
              ;})
           

        
























      