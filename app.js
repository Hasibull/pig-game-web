var rollButton = document.querySelector('.roll-btn');
var holdButton = document.querySelector('.hold-btn');
var leftPlayerScore = document.querySelector('.left-player-current-score');
var rightPlayerScore = document.querySelector('.right-player-current-score');
var leftPlayerTotal = document.querySelector('.left-player-score');
var rightPlayerTotal = document.querySelector('.right-player-score');
var leftActive = document.querySelector('.left-player-active');
var rightActive = document.querySelector('.right-player-active');

var leftPlayerCurrentScore = 0;
var rightPlayerCurrentScore = 0;
var leftPlayerTotalScore = 0;
var rightPlayerTotalScore = 0;
var countTerm = 0;

rollButton.addEventListener('click', function() {
    let currentValue = Math.ceil(Math.random() * 6);

    if(currentValue === 0){
        currentValue = 1;
    }

    let diceImageSource = './images/' + currentValue + '.jpg';

    document.querySelector('.dice-img').style.transform = 'rotate(180deg)';
    // document.querySelector('.dice-img').style.transition = 'transform 1s';

    document.querySelector('.dice-img').src = diceImageSource;

    // setTimeout(function(){
    //     document.querySelector('.dice-img').src = diceImageSource;
    // }, 100);

    if(countTerm%2==0) {
        if(currentValue !== 1) {
            leftPlayerCurrentScore += currentValue;
        }
        else {
            leftPlayerCurrentScore = 0;
            countTerm++;
            leftActive.style.backgroundColor = 'rgb(235, 8, 8)';
            rightActive.style.backgroundColor = 'rgb(16, 231, 16)';
        }
        leftPlayerScore.innerHTML = leftPlayerCurrentScore;
    }
    else {
        if(currentValue !== 1) {
            rightPlayerCurrentScore += currentValue;
        }
        else {
            rightPlayerCurrentScore = 0;
            countTerm++;
            leftActive.style.backgroundColor = 'rgb(16, 231, 16)';
            rightActive.style.backgroundColor = 'rgb(235, 8, 8)';
        }
        rightPlayerScore.innerHTML = rightPlayerCurrentScore;
    }
});

holdButton.addEventListener('click', function() {
    if(countTerm%2==0) {
        leftPlayerTotalScore += leftPlayerCurrentScore;
        leftPlayerCurrentScore = 0;
        leftPlayerTotal.innerHTML = leftPlayerTotalScore;
        leftPlayerScore.innerHTML = leftPlayerCurrentScore;
        leftActive.style.backgroundColor = 'rgb(235, 8, 8)';
        rightActive.style.backgroundColor = 'rgb(16, 231, 16)';
        
        if(leftPlayerTotalScore >= 20) {
            document.querySelector('.wrapper').style.display = 'none';
            document.querySelector('.winner').style.display = 'block';
            document.querySelector('.who-win').innerHTML = "Player 1 Win";
        }
    }
    else {
        rightPlayerTotalScore += rightPlayerCurrentScore;
        rightPlayerCurrentScore = 0;
        rightPlayerTotal.innerHTML = rightPlayerTotalScore;
        rightPlayerScore.innerHTML = rightPlayerCurrentScore;
        leftActive.style.backgroundColor = 'rgb(16, 231, 16)';
        rightActive.style.backgroundColor = 'rgb(235, 8, 8)';

        if(rightPlayerTotalScore >= 20) {
            document.querySelector('.wrapper').style.display = 'none';
            document.querySelector('.winner').style.display = 'block';
            document.querySelector('.who-win').innerHTML = "Player 2 Win";
        }
    }
    countTerm++;
});

document.querySelector('.restart').addEventListener('click', function() {
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'flex';
    leftPlayerTotalScore = 0;
    leftPlayerTotal.innerHTML = leftPlayerTotalScore;
    rightPlayerTotalScore = 0;
    rightPlayerTotal.innerHTML = rightPlayerTotalScore;
    document.querySelector('.dice-img').src = './images/1.jpg';
    countTerm = 0;
    leftActive.style.backgroundColor = 'rgb(16, 231, 16)';
    rightActive.style.backgroundColor = 'rgb(235, 8, 8)';
})