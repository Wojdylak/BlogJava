export class User {
    user_id: Number;
    nickname: string;
    email: string;
    create_date: Date;
    modified_date: Date;
    ban: boolean;
    role: string;

  constructor(userId: Number, nickname: string, email: string, ) {
    this.nickname = nickname;
    this.email = email;
    
  }
}
