export class PostDTO {
    categoryId: Number;
    text: Text;
    title: string;

  constructor(category_id: Number, text: Text, title: string) {
    this.categoryId = category_id;
    this.text = text;
    this.title = title;
  }
}
