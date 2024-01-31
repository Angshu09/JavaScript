const shortCut = {
    JS: "JavaScript",
    Py: "Python",
    Rb: "Ruby",
    Cpp: "C++"
}

for(const key in shortCut){
    //console.log(`${key} is the short form of ${shortCut[key]}`);
}

const arr = [3, 6, 8, 12, 89];
for(const a in arr){
    // console.log(a); //It gives me the keys of Array 0, 1, 2, 3, 4
    console.log(arr[a]); //here it gives me the real value of the array
}