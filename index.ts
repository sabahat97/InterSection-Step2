type personDetail={
    Name :string
    Age : number
}
type studentDetail={
    Email:string
    Status:string
}
type Person = personDetail & studentDetail //intersection syntax
let detailPerson:Person ={
    Name : 'sabahat',
    Age :12,
    Email:'sbt@gmail.com',
    Status:'student',
}
console.log(`\n\t\t<<<<STUDENT OF GIAIC>>>>\n\nl`,detailPerson)