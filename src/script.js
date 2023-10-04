const button = document.querySelectorAll('button');

button.forEach(button => {

    let i = 0;
    const maxIterations = 100;
    const intervalDuration = 0; // 10 milliseconds
    let intervalId;

    function updateGradient() {
        button.style.background = `linear-gradient(90deg, #fd6262 0%, #e8b7b7 ${i}%)`;
        console.log(i);
    }

    function sliderForward() {
        intervalId = setInterval(function() {
            if (i < maxIterations) {
                i++;
                updateGradient();
            } else {
                clearInterval(intervalId);
                console.log("Slider reached the end.");
            }
        }, intervalDuration);
    }

    function sliderBackward() {
        intervalId = setInterval(function() {
            if (i > 0) {
                i--;
                updateGradient();
            } else {
                clearInterval(intervalId);
                console.log("Slider reached the beginning.");
            }
        }, intervalDuration);
    }


    button.addEventListener('mouseout', function() {
        clearInterval(intervalId); // Stop the animation when the mouse leaves the button
        sliderBackward();
    });
    button.addEventListener('mouseover', function() {
        clearInterval(intervalId); // Clear any existing interval
        sliderForward();
        console.log("d");

    });

});
