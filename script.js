$(document).ready(() => {
// on hitting enter 
$('input').keypress((e) => {
    if (e.which == 13) { 
        $('.input-group-btn').trigger('click'); 
    }
});
// clicking search button on enter hit
$('.input-group-btn').click(() => {
    getDetail();
})
})


let getDetail = () => {
        let input = document.getElementsByTagName("input");
        let apiurl;
        // if title is given
        if ($('input').hasClass('title_input')) {
            apiurl = `https://www.omdbapi.com/?t=${input[0].value}&apikey=ced27d6d`
            // if title and year is given
        } else if ($('input').hasClass('title_input && year-input')) {
            apiurl = `https://www.omdbapi.com/?t=${input[0].value}&y=${input[1].value}&apikey=ced27d6d`
            // if id is given
        } else if ($('input').hasClass('id_input')) {
            apiurl = `https://www.omdbapi.com/?i=${input[2].value}&apikey=ced27d6d`
        } else {
            alert('some error occured')
        }
        $.ajax({
                type: "GET",
                dataType: 'json',
                url: apiurl,
                success: (data) => {
                    if (data.Response == "False") {
                        // error message displays if response is false
                        $('#error').css('display', 'block')
                        $('#movie-container').css('display', 'none')
                        $('#error-text').html(data.Error)
                    } else {
                        // movie container displays if response is true
                        $('#error').css('display', 'none')
                        $('#movie-container').css('display', 'block')
                        // validating title
                        if (data.Title !== null && data.Title !== undefined && data.Year !== null && data.Year !== undefined) {

                            $('#m_title').html(`${data.Title}&nbsp;<span class="year text-muted">(${data.Year})</span>`)

                        } else {
                            console.log(`No Title or Year Found`);
                        }
                       
                        if (data.Rated !== null && data.Rated !== undefined) {

                            $('#m_rated').html(data.Rated)

                        } else {
                            $('#m_rated').html('N/A')
                        }
                        
                        if (data.Released !== null && data.Released !== undefined) {

                            $('#m_released').html(data.Released)

                        } else {
                            $('#m_released').html('N/A')
                        }
                        
                        if (data.Runtime !== null && data.Runtime !== undefined) {

                            $('#m_runtime').html(data.Runtime)

                        } else {
                            $('#m_runtime').html('N/A')
                            console.log(`No Runtime Found`);
                        }
                    
                        if (data.Ratings !== null && data.Ratings !== undefined && data.Ratings.length != 0) {

                            for (let rating of data.Ratings) {
                                if (rating.Source == "Rotten Tomatoes") {
                                    $('#m_rotten').html(rating.Value)
                                    break;
                                } else {
                            
                                    $('#m_rotten').html('N/A')
                                }
                            }
                        } else {
                            
                            $('#m_rotten').html('N/A')
                            console.log(`No Ratings Found`);
                        }
                    
                        if (data.Metascore !== null && data.Metascore !== undefined) {

                            $('#m_metascore').html(data.Metascore)

                        } else {
                            $('#m_metascore').html('N/A')
                            console.log(`No Metascore Found`);
                        }
                        
                        if (data.Genre !== null && data.Genre !== undefined) {

                            $('#m_genre').html(data.Genre)

                        } else {
                            $('#m_genre').html('N/A')
                            console.log(`No Genre Found`);
                        }
            
                        if (data.imdbRating !== null && data.imdbRating !== undefined) {

                            $('#m_rating').html(`${data.imdbRating}<span class="font_small text-muted">/10</span><div class="font_small">${data.imdbVotes}</div>`)

                        } else {
                            $('#m_imdbrating').html('N/A')
                            console.log(`No imdbRating Found`);
                        }
                        
                        if (data.Poster !== null && data.Poster !== undefined && data.Poster != "N/A") {

                            $('#m_poster').attr('src', data.Poster)

                        } else {
                
                            $('#m_poster').attr('src', 'https://www.movietrailerbox.com/assets/images/imdbnoimage.jpg')
                            console.log(`No Poster Found`);
                        }
                    
                        if (data.Plot !== null && data.Plot !== undefined) {

                            $('#m_plot').html(data.Plot)

                        } else {
                            $('#m_lot').html('N/A')
                            console.log(`No Plot Found`);
                        }
            
                        if (data.Awards !== null && data.Awards !== undefined) {

                            $('#m_awards').html(data.Awards)

                        } else {
                            $('#m_awards').html('N/A')
                            console.log(`No Awards Found`);
                        }
                    
                        if (data.imdbID !== null && data.imdbID !== undefined) {

                            $('#m_imdbID').html(data.imdbID)

                        } else {
                            console.log(`No imdbID Found`);
                        }
                    
                        if (data.Director !== null && data.Director !== undefined) {

                            $('#m_director').html(data.Director)

                        } else {
                            $('#m_director').html('N/A')
                           
                        }
                        if (data.Writer !== null && data.Writer !== undefined) {

                            $('#m_writer').html(data.Writer)

                        } else {
                            $('#m_writer').html('N/A')
                            
                        }
                        if (data.Actors !== null && data.Actors !== undefined) {

                            $('#m_actors').html(data.Actors)

                        } else {
                            $('#m_actors').html('N/A')
                           
                        }
                        if (data.Language !== null && data.Language !== undefined) {

                            $('#m_language').html(data.Language)

                        } else {
                            $('#m_language').html('N/A')
                           
                        }
                        if (data.Country !== null && data.Country !== undefined) {

                            $('#m_country').html(data.Country)

                        } else {
                            $('#m_country').html('N/A')
                            console.log(`No Country Found`);
                        }
                    
                        if (data.DVD !== null && data.DVD !== undefined) {

                            $('#m_dvd').html(data.DVD)

                        } else {
                            $('#m_dvd').html('N/A')
                            
                        }
                        if (data.BoxOffice !== null && data.BoxOffice !== undefined) {

                            $('#m_boxoffice').html(data.BoxOffice)

                        } else {
                            $('#m_boxoffice').html('N/A')
                          
                        }
                        if (data.Production !== null && data.Production !== undefined) {

                            $('#m_production').html(data.Production)

                        } else {
                            $('#m_production').html('N/A')
                            
                        }
                        if (data.Website !== null && data.Website !== undefined && data.Website != "N/A") {

                            $('#m_website').html(`<a href="${data.Website}" target="_blank">${data.Website}</a>`)

                        } else {
                            $('#m_website').html('N/A')
                            
                        }
                    }
                },
                // timeout of 5s
                timeout: 5000,
                // displaying error message
                error: (request, errorType, errorMessage) => {
                    if (errorType === "timeout") {
                        alert('Connection timeout')

                    } else {
                        console.log("success");
                    }
                },
                
                    beforeSend: () => {
                            $("#movie-container").css('display', 'none');
                            $("#error").css('display', 'none');
                                                   },
                        
                        complete: () => {
                            console.log("completed")
                        }
                })
        }
