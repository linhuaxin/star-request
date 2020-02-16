let isDone: boolean = true
let age: number = 66
let fullName: string = 'ls'
let sentence: string = `my name is ${fullName}.
I'll be ${age + 1} next month. 
`
let list: number[] = [1, 2, 3, 4]
let x: [string, number] = ['ls', 29]

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Blue

function log(msg: any): void {
  console.log(msg)
}

let unusable: void = undefined

log(c)
