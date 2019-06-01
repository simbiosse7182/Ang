export class Product {
  // Не знаю насколько правильно делать this={this...,id,name,imageUrl}, поэтому решил сделать по-старинке:)
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.isAdded = false;
  }

  id: number;
  name: string;
  imageUrl: string;
  isAdded: boolean;

  toggleAdded() {
    this.isAdded = !this.isAdded;
  }
}
