import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SuperAccount } from './class/SuperAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(23)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(24)
console.log(companyAccount)
const superAccount: SuperAccount = new SuperAccount('Super', 30)
superAccount.deposit(3)
console.log(superAccount.getBalance())