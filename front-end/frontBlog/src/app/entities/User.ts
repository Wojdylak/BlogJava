export class User {
    userId: Number;
    nickname: string;
    email: string;
    createDate: Date;
    modifiedDate: Date;
    ban: boolean;
    role: string;

  constructor(userId: Number, nickname: string, email: string, createDate: Date, modifiedDate: Date, ban: boolean, role: string) {
    this.userId = userId;
    this.nickname = nickname;
    this.email = email;
    this.createDate = createDate;
    this.modifiedDate = modifiedDate;
    this.ban = ban;
    this.role = role;
  }
}
