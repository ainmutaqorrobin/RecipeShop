export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    //check either user has an token expired date is exist or exceed the current date.
    if (!this._tokenExpirationDate || this._tokenExpirationDate < new Date()) {
      return null;
    }
    return this._token;
  }
}
