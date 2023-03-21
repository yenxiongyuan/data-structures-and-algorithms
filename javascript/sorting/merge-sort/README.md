# Merge Sort


## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

* Pseudocode
- ALGORITHM Mergesort(arr)
  DECLARE n <-- arr.length
      if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

- ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left


- In your blog article, visually show the output of processing this input array:

- Starter [8,4,23,42,16,15]

- [8,4,23,42,16,15]
- [8,4,23,] [42,16,15]
- [8,4] [23] [42,16] [15]
- [8] [4] [23] [42] [16] [15]
- [4,8] [23,42] [15,16]
- [4,8,23,42] [15,16]
- [4,8,15,16,23,42]


## Approach & Efficiency

1. Break the array into 2 arrays
2. Break the 2 arrays into 4 arrays
3. Break the 4 arrays into 6 arrays until the each array have only 1 element inside of the array
4. Combine the 6 arrays into 3 arrays and Sort the number inside of each array
5. Combine the 3 arrays into 2 arrays and sort the number inside of the combine array.
6. Combine the 2 arrays into an array and sort the number inside of the combine array
