const color = ["Red", "Green", "White", "Black"]
let result = ""
for ( let i = 0; i<color.length; i++){
    result += color[i];
    if (i < color.length - 1)
        result += ",";
}
alert(result);