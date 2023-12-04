let n = 7;
let m = (n+1)/2;
for(let i = 1; i<=n; i++){
    let star = ''
    for(let j =1; j<=n; j++){
        if(i === j){
            if(i<m){
                star += n-i+1 + " ";
            } else {
                star += i + " ";
            }
        } else if (i + j === n+1){
            if(i<m){
                star += i + " ";
            } else {
                star += n-i+1 + " ";
            }
        } else {
            star += " " + " "
        }
    }
    console.log(star);
}