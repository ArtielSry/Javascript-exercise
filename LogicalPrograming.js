/* 27) Program a class called Movie.

The class will receive an object when it is instantiated with the following data: id of the movie in IMDB, title, director, year of release, country or countries of origin, genres and rating in IMBD.
  - All object data are mandatory.
  - Validate that the IMDB id has 9 characters, the first 2 are letters and the remaining 7 are numbers. 
     7 remaining numbers.
  - Validates that the title does not exceed 100 characters. 
  - Validates that the director does not exceed 50 characters.
  - Validates that the year of release is a 4-digit integer number.
  - Validates that the country or countries are entered as an array.
  - Validates that the genres are entered as an array.
  - Validates that the genres entered are within the accepted genres*. 
     accepted*.
  - Create a static method that returns the accepted genres*.
  - Validates that the rating is a number between 0 and 10 and can be 
    decimal of one position.
  - Create a method that returns all the technical data of the movie.
  - From an array with the information of 3 movies it generates 3 instances of the class in an automated way. 
    instances of the class in an automated way and prints the data shee t of each movie. 
    of each movie.

    Accepted Genres: Action, Adult, Adventure, Animation, Biography, 
    Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History,
    Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show,
    Thriller, War, Western. */

class Movie {
    constructor({id, title, director, premiere, country, genres, rating}){
        this.id= id;
        this.title= title;
        this.director= director;
        this.premiere = premiere;
        this.country = country;
        this.genres = genres;
        this.rating = rating;

        this.validateIMDB(id);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validatePremiere(premiere);
        this.validateCountry(country);
        this.validateGenres(genres);
        this.validateRating(rating);
    }

    //I can use this method to validate: imbd, title, director. If everything is good then return TRUE.
    validateString(property, value){
        if(!value) return console.log(`${property} "${value}" is emtpy.`)
        if(typeof value !== "string") return console.log(`${property} "${value}" is not a string.`)
    
        return true;
    } // So now I can use this same method in other method like: validateIMBD()


    // validating length
    validateLengthString(property, value, longitud){
        if (value.length > longitud) return console.log(`${property} "${value} contains to much characters. Limit is ${longitud}`);
        
        return true;
    }

    validateNumber(property, value){
        if(typeof value !== 'number') return console.log(`${property}: ${value} is not a number`);

        return true;
    }

    // validating array of genres and countris
    validateArray(property, value){
        if(!value) return console.log(`${property} "${value}" is emtpy.`)
        if(!(value instanceof Array)) return console.log(`${property} "${value}" is not an array.`)
        if (value.length === 0) return console.log(`Is empty`)

        for(let cadena of value){
            if(typeof cadena !=='string') return console.log(`This value is not a string`)
        }

        return true;
    }


    static get listOfGenres() {
        return ["Action", "Adult", "Adventure", "Animation", 
        "Biography", "Comedy", "Crime", "Documentary", 
        "Drama", "Family", "Fantasy", "Film", "Noir", 
        "Game-Show", "History", "Horror", "Musical", "Music", 
        "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", 
        "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static genresAccepted(){
        return console.log(`Genres accepted are ${Movie.listOfGenres.join(',')}`);
    }


    validateIMDB(id){
        //If the id DOENS'T match with these characteristics, it will throw an error
        if(this.validateString('IMDB id', id)){
            if(!(/^([a-z]{2}([0-9]){7})$/.test(id))){
                return console.log(`IMDB id "${id}" is not valid, it must contain 9 characters, 2 first letters and 7 numbers`);
            }
        } 
    }

    validateTitle(title){
        //If the id DOENS'T match with these characteristics, it will throw an error
        if(this.validateString('title', title)){
            this.validateLengthString('title', title, 100);
        }  
    }
    validateDirector(director){
        //If the id DOENS'T match with these characteristics, it will throw an error
        if(this.validateString('director', director)){
            this.validateLengthString('director', director, 50);
        }  
    }
    
    validatePremiere(premiere){
        if(this.validateNumber('premiere', premiere)){
            if(!(/^([0-9]){4}$/.test(premiere))){
                return console.log(`"${premiere}" is not valid, it must contain just 4 numbers`);
            }
        }
    }

    validateCountry(country){
        this.validateArray('country', country)
    }

    validateGenres(genres){
        if (this.validateArray('genres', genres)){
            for (let genre of genres){
                if(! Movie.listOfGenres.includes(genre)){
                    console.log(`Genre incorrect: ${genres.join(',')}`);
                    Movie.genresAccepted();
                }
            }
        }
    }

    validateRating(rating){
        if(this.validateNumber('rating', rating)){
        return (rating < 0 || rating > 10) 
        ? console.log(`Please insert valid rating`)
        : this.rating = rating.toFixed(1);
        }
    }

    technicalData(){
        console.log(`Technical Data:\nId: ${this.id}\nTitle: ${this.title}\nDirector: ${this.director}\nPremiere: ${this.premiere}\nCountry: ${this.country.join(',')}\nGenres:${this.genres.join(',')}\nRating: ${this.rating}`)
    }


}

/* 

const film = new Movie({
    id: 'tt1234567',
    title: 'Tomorrow when the war began',
    director: 'Stuart Beattie',
    premiere: 2013,
    country: ['Australia'],
    genres: ['Drama'],
    rating: 8
})

film.technicalData();

---- Result: ------

    "Technical Data:
    Id: tt1234567
    Title: Tomorrow when the war began
    Director: Stuart Beattie
    Premiere: 2013
    Country: Australia
    Genres:Drama
    Rating: 8.0" 

 */


const myFavorites = [
    {
        id: 'tt1234777',
        title: 'El Hoyo',
        director: 'J.S',
        premiere: 2020,
        country: ['Spain'],
        genres: ['Drama'],
        rating: 5.546
    },{
        id: 'tt1234567',
        title: 'Orphan Black',
        director: 'Unknown',
        premiere: 2016,
        country: ['Canada'],
        genres: ['Drama', 'Thriller'],
        rating: 8.4356
    },{
        id: 'tt1234556',
        title: 'Tomorrow when the war began',
        director: 'Stuart Beattie',
        premiere: 2013,
        country: ['Australia'],
        genres: ['Drama'],
        rating: 9.435
    }];

    myFavorites.forEach(e => new Movie(e).technicalData())

    /*  Result
    
        "Technical Data:
        Id: tt1234777
        Title: El Hoyo
        Director: J.S
        Premiere: 2020
        Country: Spain
        Genres:Drama
        Rating: 5.5"
        "Technical Data:
        Id: tt1234567
        Title: Orphan Black
        Director: Unknown
        Premiere: 2016
        Country: Canada
        Genres:Drama,Thriller
        Rating: 8.4"
        "Technical Data:
        Id: tt1234556
        Title: Tomorrow when the war began
        Director: Stuart Beattie
        Premiere: 2013
        Country: Australia
        Genres:Drama
        Rating: 9.4"
    
    */



