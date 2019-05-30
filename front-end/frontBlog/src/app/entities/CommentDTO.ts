export class CommentDTO {
    text: string;
    postId: Number;

    constructor(text: string, postId: Number){
        this.text = text;
        this.postId = postId;
    }
}
