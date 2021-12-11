function startRecognition()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4XWKfKmtB/model.json',modelready);
}
function modelready()
{
    classifier.classify(gotresults);
}
function gotresults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log("Got the results");
        console.log(results);
    }
}