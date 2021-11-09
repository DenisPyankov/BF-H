let fs = require('fs');
let argv = process.argv;
let HT = 0;
let HS = 0;

let S = fs.readFileSync(argv[2],'utf8');
S.toString();
let n = S.length;

let T = fs.readFileSync(argv[3],'utf8');
T.toString();
let m = T.length;

for (let i=0; i<m; i++){
	HT+=T.charCodeAt(i)*(Math.pow(2,m-i-1));
	HS+=S.charCodeAt(i)*(Math.pow(2,m-i-1));
}

let a = 1;

while (a<=n-m+1) {
	if (HT == HS) {
		let b = 0;
		while (S.charAt(a-1+b) == T.charAt(b)){
			b++
			if (b == m){
				console.log(a);
				break;
			}
		}
	}
	HS = (HS - S.charCodeAt(a-1)*(Math.pow(2,m-1)))*2 + S.charCodeAt(a-1+m) ;
	a++;
}

