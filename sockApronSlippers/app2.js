const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
let body = document.querySelector('body');
let imageDisplay = document.querySelector('#image-display')
let choiceContainer = document.querySelector('#choice-Container');
// choice declarations.
const choices = ['sock', 'apron', 'slippers'];     // change to sock apron slippers.
let userChoice;
let computerChoice;

// soundFX
let apronSound = new Audio();  // new instance of audio object
apronSound.src = "media/aproncover.wav"

let sockSound = new Audio();
sockSound.src = "media/gutshot.wav";

let slipperSound = new Audio();
slipperSound.src = "media/slipperskick.wav";

let loseSound = new Audio();
loseSound.src = "media/lose.wav";

let drawSound = new Audio();
drawSound.src = "media/yay.wav";


// apron covers sock, sock gut-shots slippers, and slippers cuts apron :]
const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}


const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'slippersapron':  // SEPARATE EACH WIN CASE TO SHOW IMAGE AS IS! classlist.add('showAPRON')
     resultDisplay.innerHTML =  userChoice + ' kicks ' + computerChoice + "  ... YOU WIN!";
      console.log("slippers kicks Apron");
      // body.classList.add('slippers');
      // FORGOT .style.height good call man...
      imageDisplay.style.backgroundImage = "url('slippers.png')";
      imageDisplay.style.backgroundSize = "cover";
      slipperSound.play();  
      break

    case 'sockslippers':    // USER WINS and shows the ROCK rock.hidden = false;
      resultDisplay.innerHTML = userChoice + ' gut-shots ' + computerChoice + ' ... YOU WIN!';
      console.log("sock gut-shots slippers!");
      // body.classList.add('sock');
      imageDisplay.style.backgroundImage = "url('socks.png')";
      imageDisplay.style.backgroundSize = "cover";
      sockSound.play();
      break

    case 'apronsock':
      resultDisplay.innerHTML = userChoice + ' covers ' + computerChoice + "  ... YOU WIN!";
      console.log("apron covers socks");
      imageDisplay.style.backgroundImage = "url('apron.png')";
      imageDisplay.style.backgroundSize = "cover";
      apronSound.play();
      break
// slippers > apron. sock > slippers. apron > socks 
      case 'apronslippers':
        resultDisplay.innerHTML = "CPU's " + computerChoice + ' kicks  ' + userChoice + " ...L7!"
        console.log("COMPUTER APRON beats slippper");
        imageDisplay.style.backgroundImage = "url('no-touch.png')";
        imageDisplay.style.backgroundSize = "cover";
        loseSound.play();
        break
    case 'slipperssock':
      resultDisplay.innerHTML = "CPU's " + computerChoice + ' gut-shots ' + userChoice;
      console.log("COMPUTER SLIPPERS");
        imageDisplay.style.backgroundImage = "url('no-touch.png')";
        imageDisplay.style.backgroundSize = "cover";
        loseSound.play();
      break
      case 'sockapron':
        resultDisplay.innerHTML = "CPU's " + computerChoice + " covers " + userChoice;
        console.log("COMPUTERS SOCKS. P.U.!")
        imageDisplay.style.backgroundImage = "url('no-touch.png')";
        imageDisplay.style.backgroundSize = "cover";
        // body.classList.add('slippers');
       loseSound.play();
        break
                                  //code is saying if user input of str: 'apron (no concatenation) and computer choice of (str): apron yields:
        case 'apronapron  ':
          case 'slippersslippers':
            case 'socksock':
              resultDisplay.innerHTML = "ITS A DRAW!"
              imageDisplay.style.backgroundImage = "url('img/handshake.png')";
              imageDisplay.style.backgroundSize = "cover";
              drawSound.play();
              break
            }
          }
          // const getResult = () => {
          //   switch (userChoice + computerChoice) {
          //     case 'slippersapron':  // SEPARATE EACH WIN CASE TO SHOW IMAGE AS IS! classlist.add('showAPRON')
          //         break
          //     case 'sockslippers':    // USER WINS and shows the ROCK rock.hidden = false;
          //         break
          //     case 'apronsock':
                 
          //         break
          //     case 'paperscissors':
          //     case 'scissorsrock':
          //     case 'rockpaper':
          //       resultDisplay.color = "red";
          //       break
          //     case 'paperpaper':
          //     case 'scissorsscissors':
          //     case 'rockrock':
          //     resultDisplay.innerHTML = "ITS A DRAW!"
          //     break
          //   }
          // }