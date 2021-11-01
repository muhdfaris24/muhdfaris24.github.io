function factorial(num) {
    let temp = num;
    for (let i = num - 1; i > 0; i--) {
      temp *= i;
    }
    return temp;
  }
  
  let cb = document.getElementById("calculateFactorial");
  cb.addEventListener("click", function () {
    let fn = document.getElementById("factorialNum");
    alert(factorial(fn.value));
  });