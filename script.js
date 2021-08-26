function bmiToCategory (total){ 
  if (total <= 18.4){
    return `SLIGHTNESS`
  }
  if (total <= 24.9){
    return `NORMAL`
  }

  if (total <= 29.9){
    return `OVERWEIGHT`;
  }
  if (total <= 39.9){
    return `OBESITY`;
  } 
  if (total >= 40){
    return `SERIOUS OBESITY`;
  }
}

function calculateBMI(height,weight){
  let total = weight / (height*height);
  
  const formatedTotal = total.toFixed(2);
  
  return {
    total: formatedTotal,
    category: bmiToCategory(total)
  }
  
}
function bt1(height,weight){
    var height = parseFloat(document.querySelector('#ip1').value);
    var weight = parseFloat(document.querySelector('#ip2').value);
    var n1 = document.querySelector('#result');
    var n2 = document.querySelector('#result1');
    var resultado = document.querySelector('#result2');
    var bmi = calculateBMI(height,weight)
    resultado.innerText = `Your BMI is: ${bmi.total} ${bmi.category}`
    n1.innerText = height;
    n2.innerText = weight;  
  } 
    
function bt2(){
    var clear1 = document.getElementById('result');
    var clear2 = document.getElementById('result1');
    var clearResult = document.getElementById('result2');
    var height = document.querySelector('#ip1');
    var weight = document.querySelector('#ip2');

    clear1.innerText = null;
    clear2.innerText = null;
    clearResult.innerText = null;
    height.value = null;
    weight.value = null;

    height.focus();
  }