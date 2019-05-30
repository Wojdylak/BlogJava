export class User {
    user_id: Number;
    nickname: string;
    email: string;
    createDate: Date;
    modifiedDate: Date;
    ban: boolean;
    role: string;

  constructor(userId: Number, nickname: string, email: string, ) {
    this.nickname = nickname;
    this.email = email;
    
  }
}
