var myfunc=function(sentence,arr){
    for(i=0; i<arr.length; i++){
       sentence=sentence.replace("_", arr[i]);
    } 
    
    return sentence;

}

print(myfunc("_, we have a _.",["Houston", "problem"]));
print(myfunc("If at _ you don’t _, try, try _.",["first", "succeed", "again"]));
print(myfunc("May the _ _ _ _.",["Force", "be", "with", "you"]));


var myfunc=function(arr){
    
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

print(myfunc([8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3]));
print(myfunc([8, 8, "meh", 6]));
print(myfunc([null, null, 1, undefined, 5, 9, false]));


var myfunc=function(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(typeof arr[i]=='number'){
            count++;
        }
    }
    return "Numbers: "+ count + " Strings: " + (arr.length-count);

}

print(myfunc([1, "10", "hi", 2, 3]));
print(myfunc([1, 4, "i am a string", "456"]));


var myfunc=function(arr){
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

print(myfunc(["anymore", "raven", "me", "communicate"]));
print(myfunc(["wish", "slightly", "understand", "longer","unexpected", "heart"]));


var myfunc=function(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
    }
    return sum;
}

print(myfunc([1, 12, 4]));
print(myfunc([-1, 0, 1, 2]));
print(myfunc([]));
print(myfunc([-1, 0.4]));

var myfunc=function(arr){
    let prodarr=[];
    for(i=0;i<arr.length-1;i++){
      prodarr.push(arr[i]*arr[i+1]);
    }
    return prodarr;
}

print(myfunc([3, 7, 12, 5, 20, 0]));
print(myfunc([1, 1, 4, 32, 6]));
