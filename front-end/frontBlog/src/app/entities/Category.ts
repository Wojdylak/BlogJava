export class Category {
  category_id: Number;
  name: string;
  modifiedDate: Date;

  constructor(categoryId: Number, name: string, modifiedDate: Date) {
    this.category_id = categoryId;
    this.name = name;
    this.modifiedDate = modifiedDate;
  }
}
