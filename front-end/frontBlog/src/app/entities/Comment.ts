import { User } from './User';
import { Post } from './Post';

export class Comments{
    comment_id: number;
    user: User;
    post: Post;
    text: string;
    create_date: Date;
    modified_date: Date;

    constructor(commentId: number, user: User, post: Post, text: string, createDate: Date, modifiedDate: Date){
        this.comment_id = commentId;
        this.user = user;
        this.post = post;
        this.text = text;
        this.create_date = createDate;
        this.modified_date = modifiedDate;
    }
}