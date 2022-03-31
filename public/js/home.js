function calculate(height, weight){
    var result =  weight/(height * height);
    diagnose(result);
   return result;
}

function diagnose(result){ 
    if (result <= 18.5){
         return "Under Weight";
    }else if(result > 18.5 && result <=24.9){
        return "Normal Weight";
    }else if(result >24.9 && result <=29.9){
        return "Over Weight";
    }
    else{
        return "Obese";
    }
}

module.exports = {calculate, diagnose};