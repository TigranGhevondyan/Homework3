let myfunc=function(sentence,arr){
    for(i=0; i<arr.length; i++){
       sentence=sentence.replace("_", arr[i]);
    } 
    
    return sentence;

}

console.log (myfunc("_, we have a _.",["Houston", "problem"]));
console.log(myfunc("If at _ you don’t _, try, try _.",["first", "succeed", "again"]));
console.log(myfunc("May the _ _ _ _.",["Force", "be", "with", "you"]));


let myfunc=function(arr){
    
    let oddarr=[];
    let evenarr=[];
    
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
           
            if (arr[i] % 2==0){
              evenarr.push(arr[i]);
            }
            else{
              oddarr.push(arr[i]);
            }
        }
    }
   
    for(i=0; i<evenarr.length; i++){
       oddarr.push(evenarr[i]);
    }
    
    return oddarr;

}

console.log(myfunc([8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3]));
console.log(myfunc([8, 8, "meh", 6]));
console.log(myfunc([null, null, 1, undefined, 5, 9, false]));


let myfunc=function(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(typeof arr[i]=='number'){
            count++;
        }
    }
    return "Numbers: "+ count + " Strings: " + (arr.length-count);

}

console.log(myfunc([1, "10", "hi", 2, 3]));
console.log(myfunc([1, 4, "i am a string", "456"]));


let myfunc=function(arr){
    let maxval=0;
    let minval=Number.MAX_VALUE;
    for(i=0;i<arr.length;i++){
        if(arr[i].length>maxval){
            maxval=arr[i].length;
        }
        
        if(arr[i].length<minval){
          minval=arr[i].length;
        }
    }
    return maxval+minval;

}

console.log(myfunc(["anymore", "raven", "me", "communicate"]));
console.log(myfunc(["wish", "slightly", "understand", "longer","unexpected", "heart"]));


let myfunc=function(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
    }
    return sum;
}

console.log(myfunc([1, 12, 4]));
console.log(myfunc([-1, 0, 1, 2]));
console.log(myfunc([]));
console.log(myfunc([-1, 0.4]));

let myfunc=function(arr){
    let prodarr=[];
    for(i=0;i<arr.length-1;i++){
      prodarr.push(arr[i]*arr[i+1]);
    }
    return prodarr;
}

console.log(myfunc([3, 7, 12, 5, 20, 0]));
console.log(myfunc([1, 1, 4, 32, 6]));
