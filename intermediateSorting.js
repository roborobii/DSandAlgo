function merge(arr1, arr2) {
	let results = [];

	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr1.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0,mid), arr.slice(mid)));
}

console.log(merge([1,10,50],[2,14,99,100]))
console.log(mergeSort([3,8,1,83,2,6]))