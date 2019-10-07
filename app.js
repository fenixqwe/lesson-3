//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

//Если нет ни одного аргумента, вернуть ноль: multiply() // 0



/*function multiply(){
	var s = 1;
	if(arguments.length == 0) return 0;
	for(let i = 0; i < arguments.length; i++) s *= arguments[i];
		return s
}

console.log(multiply())
*/
//Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

/*function reverseString(str){
		return str.split('').reverse().join('')
};

console.log(reverseString('text'))*/
//Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа


/*function someString(str){
	let res = '';
	for (let i = 0; i < str.length; i++){
		res += str.charCodeAt(i)
	}
	return res.split('').join(' ')
}
console.log(someString('tex'))*/

//Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
//Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
//Числа в строке указаны как пример вы подставляете реальные числа.

/*function lottery(){
	let random = Math.random(1, 10);
	if (random === arguments){
		console.log('Вы выиграли')
	}
	else{
		console.log('Вы не угадали ваше число ' + arguments 'а выпало число ' + random)
	}
}
lottery(5)*/
//5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

/*function getArray(numbers){
	let res = 1;
	for(; res < numbers; res++){
		console.log(res)
	};
	return res;
}
console.log(getArray(15))*/

/*function doubleArray(arr){
	return arr.push(arr)
}
console.log(doubleArray([1, 2, 3]))*/
//6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:

/*let someArr = [1, 2, 3];

function doubleArray(arr){
	let newArr = [];
	for(let i = 0;i < 2; i++){
		for(let i = 0;i < arr.length; i++){
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
}
doubleArray(someArr)*/


//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 

/*
function changeCollection(){
	arguments.shift()
	return arguments
}
console.log(changeCollection([1, 2, 3]))
*/
//1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

/*let a = [-2, 3, 4, -5, -6, 2, 4, -56]

let  positive = 0;
let  negative = 0;

for(let i = 0;i < a.length; i++){
	let b = a[i]
		if(b < 0){
			negative += 1;
		}else{
			positive += 1;
		}
		
}
console.log(positive, negative)*/


