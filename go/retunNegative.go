package main

func Abs(x int) int {
	if x > 0 {
		return -x
	}
	return x
}

func main() {
	println(Abs(-2))
	println(Abs(-19))
	println(Abs(0))
	println(Abs(2))
	println(Abs(10))

}