package main

import "fmt"

func main() {
	sequence := Recursive(15)
	fmt.Print(sequence)
}

//Recursive build fibonacci sequence via recuersive function
func Recursive(maxItems int) []int {
	return fn(0, maxItems, make([]int, 0))
}

func fn(index int, maxIndex int, sequence []int) []int {

	nextIndex := index + 1

	if nextIndex > maxIndex {
		return sequence
	}

	if index == 0 {
		sequence = append(sequence, 0)
	} else {
		sum := 0
		if len(sequence) > 1 {
			sum = sequence[index-1] + sequence[index-2]
		} else {
			sum = sequence[index-1] + 1
		}
		sequence = append(sequence, sum)

	}

	return fn(nextIndex, maxIndex, sequence)
}
