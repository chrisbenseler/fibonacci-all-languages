package main

import "fmt"

func main() {
	sequence := FibonacciLoop(15)
	fmt.Print(sequence)
}

//FibonacciLoop loop
func FibonacciLoop(n int) []int {
	n = n - 1
	f := make([]int, n+1, n+2)
	if n < 2 {
		f = f[0:2]
	}
	f[0] = 0
	f[1] = 1
	for i := 2; i <= n; i++ {
		f[i] = f[i-1] + f[i-2]
	}
	return f
}
