# Insertion Sort


## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

* Pseudocode
- Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

- InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

- In your blog article, visually show the output of processing this input array:

- [8,4,23,42,16,15]


## Approach & Efficiency


## Whiteboard Process

![Insertion Sort](../../assets/challenge-26a.png)
![Insertion Sort](../../assets/challenge-26b.png)
