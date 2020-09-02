package main

import "fmt"

func main() {
	sequence := IterateArray(15)
	fmt.Print(sequence)
}

//IterateArray build fibonacci sequence via iterate array
func IterateArray(maxItems int) []int {

	actual := 1
	previous := -1
	sequence := make([]int, 0)
	for i := 1; i <= maxItems; i++ {

		if previous == -1 {
			sequence = append(sequence, 0)
			previous = 1
			actual = 0
			continue
		}
		sum := actual + previous
		sequence = append(sequence, sum)
		previous = actual
		actual = sum

	}

	return sequence
}
