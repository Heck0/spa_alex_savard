interface CategoryTypes {
  id: string;
  name: string;
  icon: string;
}

export default class Category implements CategoryTypes {
  id: string;
  name: string;
  icon: string;

  constructor(id: string, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
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
}

export type { CategoryTypes };
