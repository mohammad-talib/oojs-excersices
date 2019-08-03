//SuperHero

function SuperHero(name,color){
    this.name = name;
    this.color = color;
    this.change = function(){
        console.log(this.name);
        console.log(this.color);
    }
}
var a = new SuperHero("mohammed",25);
a.change();

//Sing a Song

function song(){
    this.songName = "A day in the Life";
    this.bandName = "The Beatles";
}

song.prototype.countName = function(){
    console.log(this.songName.length);
}

song.prototype.createElement = function(){
    $("body").append(`<h1>${this.bandName}</h1>`);
}

var NewSong = new song();
NewSong.countName();
NewSong.createElement();


//The Cat

function Cat(tiredness,hunger,lonliness,happiness){
    this.tiredness=tiredness;
    this.hunger=hunger;
    this.lonliness=lonliness;
    this.happiness=happiness;

    this.feed = function(){
        console.log(this.hunger=hunger-1);
    }
    this.sleep = function(){
        console.log(this.tiredness=tiredness-1);
    }
    this.pet = function(){
        console.log(this.happiness=happiness+1);
    }

    this.status = function(){
        if(this.hunger < 5 ){
            console.log("Paws is really hungry")
        }else{
            console.log("Paws is VERY happy")
        }
    }
}

var theCat = new Cat(10,10,10,10);
theCat.feed();
theCat.sleep();
theCat.pet();
theCat.status();


//The Reading List

function BookList(num1, num2 , Book){
    this.read = num1;
    this.notread = num2;
   
    this.lastbook = Book.genre;
}

function Book(title,genre,author,read){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.date = Date()
}


// var a = new BookList(123,2,b);

// console.log(a.title);
// var b = new Book('a','b','c',true)
// console.log(b.currentbook)



// function song(songName , bandName){
//      this.SongName = songName;
//       this.BandName = bandName;
// }

// song.prototype.countName = function(){
//          console.log(this.SongName.length);
// }  

// song1 = new song("A day in the Life" , "The Beatles");
// song1.countName();