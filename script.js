function result1() {
    var sum=0;
    var result= document.getElementById("result")
    var quiz = document.getElementById("quiz")

    if (document.getElementById("correct1").checked){
        sum++;
    } 
    if (document.getElementById("correct2").checked){
        sum++;
    } 
    if (document.getElementById("correct3").checked){
        sum++;
    } 
    if (document.getElementById("correct4").checked){
        sum++;
    } 
    if (document.getElementById("correct5").checked){
        sum++;
    } 
    quiz.style.display = "none";
    
    var finalAns=sum*20;
    document.write("your score is"  +  finalAns + "%")

    if (finalAns>=80){
        document.write(" Excellent")
    }
    else if (ans<80 && finalAns>=50){
        document.write(" You fairly passed")
    }
    else if (finalAns<50){
        document.write("poorly performed")
    }
}
function result2(){
    alert(" you fill all the questions")
}