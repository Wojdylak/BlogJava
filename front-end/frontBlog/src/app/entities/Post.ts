import { Category } from './Category';
import { User } from './User';

export class Post {
    post_id: Number;
    user: User;
    category : Category;
    title: string;
    text: Text;
    create_date: Date;

    constructor(postId: Number, user: User, category: Category, title: string, text: Text, createDate: Date ){
        this.post_id = postId;
        this.user = user;
        this.category = category;
        this.title = title;
        this.text = text;
        this.create_date = createDate;
    }
}
