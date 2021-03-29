export default class Category {
  id: string;
  name: string;
  icon: string;
  height?: number;
  width?: number;

  constructor(
    id: string,
    name: string,
    icon: string,
    height?: number,
    width?: number
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.height = height;
    this.width = width;
  }

  get categoryId(): string {
    return this.id;
  }
  get categoryName(): string {
    return this.name;
  }
  get categoryIcon(): string {
    return this.icon;
  }
  get categoryWidth(): number | undefined {
    return this.width ? this.width : undefined;
  }
  get categoryHeight(): number | undefined {
    return this.height ? this.height : undefined;
  }
}
