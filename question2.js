/*数组的交叉输出
要求：
1、任选一种编程语言，写代码，实现功能。
有个int数组，int[]。
n个元素为一组，正序输出。

m个元素为一组，逆序输出。

然后重复上面2步。
*/
function outPut(array,n,m){
	let arr = array;
    let result = [];
    let stack = [];
    while(arr.length){
        for(let i=0;i<n;i++){
            if(arr.length===0) break;
            result.push(array.shift());
        }
        for(let j=0;j<m;j++){
            if(arr.length===0) break;
            stack.push(array.shift());
        }
        stack.reverse().map(num=>result.push(num));
		stack = [];
    }
    return result.join(',');
}



