import { Category } from './Category';
import { User } from './User';

export class Post {
    postId: Number;
    user: User;
    category : Category;
    title: string;
    text: Text;
    createDate: Date;
    modifiedDate: Date;

    constructor(postId: Number, user: User, category: Category, title: string, text: Text, createDate: Date, modifiedDate: Date ){
        this.postId = postId;
        this.user = user;
        this.category = category;
        this.title = title;
        this.text = text;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
}
