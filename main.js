
song_status = song.isPlaying();
console.log(song_status);
var video = document.getElementById("video");
var loading = document.getElementById("loading");
var suspense;
var length = questions.length;
var random_number = Math.random * length;
var round = Math.round(random_number);
console.log(round);

const questions = ["Where is Indira Gandhi Center for Atomic Research located ?",
        "What is the numbers of the members of the European Union ?",
        "Which article of the Constitution deals with equality before law ?",
        "In which year was the Reserve Bank of India established ?",
        "Nasdaq is the share market of which country ?",
        "On which article of Indian Constitution, Parliament can legislate on any subject of the State List ?",
        "How many members can be nominated by the President for Rajya Sabha ?",
        "Which state first established Panchayati Raj System",
        "Where is the National Chemical Laboratory located ?",
        "When did the RTI Act come into force in India ?",
        "Which country has announced to use Zika vaccine on humans",
        "On which day did the 73rd Constitution Amendment Act come into force ?",
        "Who invented the typewriter machine ?",
        "What is the full form of MGNREGA ?",
        "Who was the first woman judge of the hight court ?",
        "Who appoints the chairman and members of the Human Rights Comission ?",
        "On which date in National Mathematics Day celebrated ?",
        "Where is the headquaters of UNESCO is located ?",
        "On which river Sardar Sarovar Dam is located ?",
        "Which article of the Indian Constitution is related to freedom of press ?",
        "Who invented the berometer ?",
        "What is the full form of SEBI ?",
        "What is the numebr of members in the European Union ?",
        "The Slack season in the Indian Economy is",
        "What is the largest irrigation canal in India called ?",
        "What is the name of the first Atomic Submarine of India ?",
        "What is the name of first British to visit India ?",
        "Name of the first election commissioner of India ?",
        "Which is the national colour of IndiA ?",
        "Harauti language is spoken in which Indian State ?",
        "Who is considered as the father of genetics ?",
        "Who is known as the father of Modern Medicine ?",
        "The symbol Zr stands for ?",
        "What is the Russian name for INS Vikramaditya ?",
        "Where is the Chapora Fort of India located ?",
        "Lapetus is the third-larget natural satellite of which planet ?",
        "Which place in India is called the confluence of three seas ?",
        "Which magazine is called the Bible of Cricket ?",
        "Which is called the 'metal of the future ?",
        "The world's largest river island 'Majuli' is located in which district of Assam ?",
        "Who was the author of the first book printed in the Assamese language ?",
        "What are the heater wires made of ?",
        "The official language of the Gupta rulers was ?",
        "The Sultan of Delhi, Razia Sultan was the daughter of whom?"
];
console.log(questions);

var sub_heading = "India's biggest quiz platform";
var content_data = '<h1 class = "btn-primary heading col-lg-12 col-md-12 col-sm-12 col-xs-12">Kaun Banega Crorepati <br> <br> <span class = "text-info bg-primary sub-header">' + sub_heading + '</span></h1><br><br><img src = "ab_sir.PNG" class = "image col-lg-3 col-md-3 col-sm-12 col-xs-12"><span class = "note"><h3 class = "btn btn-success">Welcome to KBC ! Click on the play button below to start the game</h3></span><br><br><a href = "quiz_page.html"><button class = "btn btn-primary col-lg-4 col-md-6 col-sm-16 col-xs-12" id = "navigate_button">Play Game</button></a>';



function preload() {

        song = loadSound("kbc_theme_song.mp3");
        song.rate(1);
        suspense = loadSound("suspense.mp3");
        suspense.setVolume(1);
}
function setup() {
        
          
}
function draw() {
                
}
function display_content() {
  
        setTimeout(function () {
        document.getElementById("video").hide();
        document.getElementById("loading").show();
        },100)

        setTimeout(function () {
                document.getElementById("loading").remove();
                document.getElementById("video").style.display.none;
                document.getElementById("content").innerHTML = content_data;
                suspense.play();
        }, 5000);   
        }
        

function setQuestion() {
document.getElementById("question_box").innerHTML = questions[Math.floor(Math.random() * questions.length)];
}