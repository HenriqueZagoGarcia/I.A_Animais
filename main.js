function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E2n9eU0dT/model.json', modelReady);
}

function modelReady()
{
  classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir: ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão: ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("background");
        img1 = document.getElementById("dog");
        img2 = document.getElementById("monkey");
        img3 = document.getElementById("bird");

        if(results[0].label == "Background Noise")
        {
            img.src = 'background-gif.gif';
            img1.src = 'dog.jpeg';
            img2.src = 'monkey.jpeg';
            img3.src = 'bird.jpeg';
        }

        if(results[0].label == "Cachorro")
        {
            img.src = 'background.jpeg';
            img1.src = 'dog.gif';
            img2.src = 'monkey.jpeg';
            img3.src = 'bird.jpeg';
        }

        if(results[0].label == "Macaco")
        {
            img.src = 'background.jpeg';
            img1.src = 'dog.jpeg';
            img2.src = 'monkey.gif';
            img3.src = 'bird.jpeg';
        }

        if(results[0].label == "Pássaro")
        {
            img.src = 'background.jpeg';
            img1.src = 'dog.jpeg';
            img2.src = 'monkey.jpeg';
            img3.src = 'bird.gif';
        }
    }
}
