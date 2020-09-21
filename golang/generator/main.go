package main

import "fmt"

//FibonacciGenerator fibonacci generator sequence
func FibonacciGenerator(first int, second int) chan int {
	c := make(chan int)

	go func() {
		for i, j := first, second; ; j, i = i+j, j {
			c <- i
		}
	}()

	return c
}

func main() {
	generator := FibonacciGenerator(0, 1)
	for i := 0; i < 15; i++ {
		fmt.Println(<-generator)
	}
}
