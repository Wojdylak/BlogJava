export class Category {
  categoryId: Number;
  name: string;
  modifiedDate: Date;

  constructor(categoryId: Number, name: string, modifiedDate: Date) {
    this.categoryId = categoryId;
    this.name = name;
    this.modifiedDate = modifiedDate;
  }
}
