export class Login {
    constructor(object?) {
      object = object || {};
      this.username = object.anio || '';
      this.password = object.tipo || '';
    }
    public username: string;
    public password: string;
}