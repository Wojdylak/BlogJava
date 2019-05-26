export class Category {
  category_id: Number;
  name: string;
  modified_date: Date;

  constructor(categoryId: Number, name: string, modifiedDate: Date) {
    this.category_id = categoryId;
    this.name = name;
    this.modified_date = modifiedDate;
  }
}
