/**
 * Created by dsying on 2018/6/9.
 */

function swap(arr,i,j){
    //[arr[i],arr[j]] = [arr[j],arr[i]];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubleSort(array){
    for(let i = 0,len = array.length; i < len; i++){
        for(let j = 0; j < len-1-i; j++){
            if(array[j] > arr[j+1]){
                swap(array,j,j+1)
            }
        }
    }
    return array;
}
let arr = [3,1,7,5,9,4,2,8];
// bubleSort(arr);
// console.log(arr)

function selectSort(arr){
    for(let i = 0,len = arr.length; i < len; i++){
        let k = i;
        for(let j = i; j < len; j++){
            if(arr[j] < arr[k]){
                k = j;
            }
        }
        if(k !== i){
            swap(arr,i,k)
        }
    }
    return arr;
}
// selectSort(arr);
// console.log(arr)

function insertSort(arr){
    for(let i = 1,len = arr.length; i < len; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                swap(arr,j,j-1)
            }else{
                break
            }
        }
    }
    return arr;
}
// insertSort(arr);
// console.log(arr);


function countSort(arr){
    //1 找到arr中的最大值
    let max = findMax(arr);
    //2 准备max个桶
    let bucketArr = [];
    for(let m = 0; m < max+1; m++){
        bucketArr[m] = 0;
    }
    //3 入桶
    for(let i = 0,len = arr.length; i < len; i++){
        bucketArr[arr[i]] += 1;
    }
    //4 出桶
    let outArray = [];
    for(let j = 0,len = bucketArr.length; j < len; j++){
        if(bucketArr[j] > 0){
            for(let k = 0; k < bucketArr[j]; k++){
                outArray.push(j)
            }
        }
    }
    return outArray;
}
function findMax(arr){
    let k = 0;
    for(let i = 1,len = arr.length; i < len; i++){

        if(arr[i] > arr[k]){
            k = i;
        }
    }
    return arr[k]
}

let arr1 = [1,3,6,3,2,4,6,1,2,9,8,15,8,3,6,12];
console.log(countSort(arr1));