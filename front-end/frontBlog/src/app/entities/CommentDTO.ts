export class CommentDTO {
    name: string;
    postId: number;

    constructor(name: string, post_id: number){
        this.name = name;
        this.postId = post_id;
    }
}
