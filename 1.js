// alert("Das ist Javascript!");

// let test = prompt("сколько тебе лет?", 18);
// alert("Тебе "+test+" лет!");

// let answer = confirm("Are you a human?");
// alert(answer);

// let q1 = prompt("WHat is your name?");
// alert(q1);

// if (null==undefined) 
// {
	// alert("Yoshkin kot!");} else {
	// alert("Net ya ne Byron!");}

// let q2 = prompt("what is the official name of Javascript?","");
// if (q2 == "ECMAScript") {alert("yes!")} else {alert("No!")};

// let age = prompt("age?","");
// if (!(age >= 14 && age <=90)) {alert("correct age")} else {alert("incorrect age")};
// if (age < 14 || age > 90) {alert("correct")} else {alert("wrong")};

// let adminPassword = "";
// let login = prompt("Who's there?","");
// if (login == null || login == "") {
	// alert("Cancelled");
// } else if (login == "admin" || login == "Admin" || login == "ADMIN") {
	// adminPassword = prompt("Password","");
	// if (adminPassword == "qwerty") {
		// alert(`Hello, ${login}`)} else if (adminPassword == null) {
		// alert("Cancelled")} else {
		// alert("Wrong password!")} 
// } else {
	// alert("Bugger off, I don't know you!")
// }

// for (i=2;i<=10;i+=2) {
// alert(i);
// }

// for (let i=2;i<=10;i++) {

	// if (i%2==0) {
	// alert(i);
	// }
// }

// let i=0;
// while (i<3) {
  // alert( `number ${i}!` );
  // i++;
// }

// let i;
// do {i = prompt("Введи число больше 100","");}
// while(i<=100 && i);

/* let n=prompt("number bigger than 1",2);
for (i=1;i<n;i++) {
	let foo=1;
	while (foo<i) {
	// if(i%foo==0)continue;
	alert(i);
	foo++;
	}
} */

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
	// case 0:
	// alert('Вы ввели число 0');
	// break;
	
	// case 1:
	// alert('Вы ввели число 1');
	// break;
	
	// case 2:
	// case 3:
	// alert('Вы ввели число 2, а может и 3');
	// break;
// }

// function min(a,b) {
	// if (a<b) {return a;}
	// else {return b;}
// }
// alert(min(2,5));
// alert(min(3,-1));
// alert(min(1,1));

function pow(x,n) {
	if (n==undefined || n==null || n<0) 
	{return `Степень ${n} не поддерживается, используйте натуральное число`;}
	else {
	return x**n;}
}
	let x = prompt("x?",);
	let n = prompt("n?",);
alert(pow(x,n));











