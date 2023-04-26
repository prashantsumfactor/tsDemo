function addition(x:number,y:number){
    return x + y;
}

    //mergeCommonarr(commonArray,0,commonArray.length-1);


function mergeCommonarr(arr:number[],left:number, right:number){
    if(left>=right){
        return;
    }
    let mid =left + Math.floor((right-left)/2);
    mergeCommonarr(arr,left,mid);
    mergeCommonarr(arr,mid+1,right);
    merge(arr,left,mid,right);
}


function merge(arr:number[], left:number, mid:number, right:number)
{
    var n1 = mid - left + 1;
    var n2 = right - mid;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = left;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}