function result1() {
    var sum=0;
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
    var ans=sum*20;
    document.write("your score is" + ans +"%")

    if (ans>=80){
        document.write("excellent")
    }
    else if (ans<80 && ans<=50){
        document.write(" You fairly passed")
    }
    else if (ans<50){
        document.write("poorly performed")
    }
}
function result2(){
    alert(" make sure you fill all the questions")
}