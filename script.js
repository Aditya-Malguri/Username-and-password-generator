const Passwordbox = document.getElementById("Password");
const Userbox = document.getElementById("Username");

const len=12;
const uppercase="ASDFGHJKLZXCVBNMQWERTYUIOP";
const lowercase="wertyuiopqasdfghjklzxcvbnm";
const symbols="!@#$%^&*(){}[]'.";
const number  ="0123456789";
const allChars = uppercase+lowercase+number+symbols;

function createpass(){
    let password = "";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(len > password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    Passwordbox.value=password;
}


function copyPass(){
    Passwordbox.select();
    document.execCommand("copy");
}

function copyUser(){
    Userbox.select();
    document.execCommand("copy");
}



var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
  ]; 


  function createName(){
    let name="";
    name +=nameList[Math.floor(Math.random()*nameList.length)];
    name +=nameList[Math.floor(Math.random()*nameList.length)];
    if(Math.random()>0.5){
        name +=nameList[Math.floor(Math.random()*nameList.length)];
    }
    Userbox.value=name;
    
  }
  



