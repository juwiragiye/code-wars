package main

func ReverseString(s string) string {
	var result = ""
  for _,c := range s {
    result = string(c) + result
  }
  return result
}