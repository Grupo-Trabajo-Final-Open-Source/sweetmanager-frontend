export class SignUpRequest {
  constructor(public name : string, public email: string, public password: string, public roles : Array<string>, public companyId: number) {}
}
