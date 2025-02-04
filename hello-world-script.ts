import { Product, User } from "./types/User"

// New Comment, did this appear at GIT?
/* Object Instantiation */
const userWithoutInterface: { username: string; password: string } = {
  username: "",
  password: "",
}
const product: Product = {
  id: 0,
  price: 0,
  sale: false,
}
const benny: User = {
  username: "Benny",
  password: "123",
  product: product,
}
const user: User = {
  username: "",
  password: "",
  product: product,
}

const sum = subtractionExample(50, 25)

/* Function Declarations */
function helloWorld() {
  console.log("Hello world! :)")
}

function testDataTypes() {
  const name: string = ""
  const name2: String = "" // NOT recommended (capital S)

  const age: number = 15
  const currency: number = 289.5

  const isTired: boolean = true
  const isLoggedIn: boolean = false

  const highScoreList: number[] = [250, 150, 0]
  const usernameList: Array<string> = ["Benny", "Thomas"]

  // Avoid the use of 'any'
  let anyDataType: any = ""
  anyDataType = 0
  anyDataType = true
}

function returnNothing() {} // void by default
function returnNothingExplicit(): void {}
function additionExample(): number {
  return 2 + 2
}

// approach --> without interface
function printCurrentUserWithoutInterface(user: {
  username: string
  password: string
}) {
  console.log(user)
}

function printCurrentUser(user: User) {
  console.log(user.username)
}

function subtractionExample(x: number, y: number): number {
  return x - y
}

console.log(sum)
printCurrentUser(benny) // <-- username
helloWorld()
