import { User } from './User';
import { Post } from './Post';

export class Comments{
    commentId: Number;
    user: User;
    post: Post;
    text: string;
    createDate: Date;
    modifiedDate: Date;

    constructor(commentId: Number, user: User, post: Post, text: string, createDate: Date, modifiedDate: Date){
        this.commentId = commentId;
        this.user = user;
        this.post = post;
        this.text = text;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
}