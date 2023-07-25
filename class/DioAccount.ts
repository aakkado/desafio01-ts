export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value <= this.balance){
      this.balance -= value
    }else{
      throw new Error ('Saldo insuficiente')
    }
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
