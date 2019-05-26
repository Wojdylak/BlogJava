export class PostDTO {
    categoryId: Number;
    text: Text;
    title: string;

  constructor(categoryId: Number, text: Text, title: string) {
    this.categoryId = categoryId;
    this.text = text;
    this.title = title;
  }
}
