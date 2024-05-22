type personDetail={
    Name :string
    Age : number
}
type officialDetail={
    Email:string
    Status:string
}
type Person = personDetail & officialDetail //intersection syntax
let detailPerson:Person ={
    Name : 'sabahat',
    Age :12,
    Email:'sbt@gmail.com',
    Status:'student',
}
console.log(`\n\t\t<<<<STUDENT OF GIAIC>>>>\n\nl`,detailPerson)