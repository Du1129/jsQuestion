/*
输入两个表示复数的字符串，输出他们相乘的结果的字符串复数
*/
function complexNumSolution(str1,str2){
	if(typeof(str1) !=="string"||typeof(str2)!=="string"){
		return false;
	}
	const numA = [];
	const numB = [];
	const result = [];
	str1.slice(0,-1).split('+').map(num =>{
		numA.push(parseInt(num));
	});
	str2.slice(0,-1).split('+').map(num =>{
		numB.push(parseInt(num));
	});
	result.push(numA[0]*numB[0]-numA[1]*numB[1]);
	result.push(numA[0]*numB[1]+numA[1]*numB[0]);
	return `${result.join('+')}i`;
}
	
	