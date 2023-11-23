let numbers = [120, 60, 57, 9, 15, 30];

function divisibility(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 !== 0) {
      console.log("Divisible by 3 but not by 2", arr[i]);
    } else if (arr[i] % 3 == 0 && arr[i] % 2 == 0) {
      continue;
    }
  }
}

divisibility(numbers);
