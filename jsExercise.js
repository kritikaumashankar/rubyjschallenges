function palindrome(str){
	str = str.replace(/\s/g, '')
	var reverseString=''
	for(var i=str.length-1; i>=0;i--){ 
		console.log()
		reverseString += str[i]
	}
	console.log(reverseString)
	if(reverseString === str)
		console.log(str + " is a palindrome")
}

function strAlphabetical(str){
	console.log(str.split("").sort().join(''))
}

function strCapitalize(str){
  var arr = str.split(" ")
  var newStr =''
  for(var i=0 ; i< arr.length; i++){
   newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)+" "
  }
  console.log(newStr)
}

function longestWord(str){
  console.log(str)
	var arr = str.split(" ")
    console.log(arr)

    //sorts element in an array by length
    arr.sort((a, b) => b.length - a.length)
	console.log(arr[0]);
}

function vowelCount(str){
  var regex = /[aeiou]/
  var c = 0
  for(var i =0; i <str.length;i++){
    if(regex.test(str.charAt(i))){
      c++
    }
  }
     console.log(c)
}

function primeNumber(num){
  if(num ===0 || num === 1){
    return false
  }else{
    for(var i = 2;i < num ;i++){
      if (num%i === 0)
        return false
    }
     
  }
   return true
}

function typeFunc(obj){
  console.log(typeof obj) 
}

function secondSmallLarge(arr){
  arr = arr.sort((a,b)=> a-b)
  console.log(arr)
  console.log(arr[1] + " , " + arr[arr.length-2])
  
}
function factorOfNumber(num){
  var factStr = ''
  for(i=2;i<=num;i++){
    while(num%i === 0){
      factStr += i.toString() + " * "
      num =num/i
    }
      
  }
  console.log(factStr)
}

function amountToCoin(amt){
  var arr=[]
  while(amt > 0){
    if(amt>=25){
      arr.push(25); 
      amt -=25;
    }else if (amt <25 && amt >=10){
      arr.push(10) ;
      amt-=10;
    
    }else if (amt <10 && amt >=2){
      arr.push(2) ;
      amt-=2;
    } else {
      arr.push(1);
      amt -=1;
    }
  }
  
  console.log(arr)
}



// strAlphabetical("kritika")
// palindrome('Madam')
//strCapitalize('aanya is a good girl')
//longestWord("it is your responsibility to do your job")
//vowelCount('responsibility')
//console.log(primeNumber(10))
//typeFunc(true)
//secondSmallLarge([33,5,21,99,6])
//factorOfNumber(12)
//amountToCoin(92)