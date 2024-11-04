export enum MenuTypeEnum {
  einzel = "einzel",
  menü = "menü",
}

export enum JuiceTypeEnum {
  orangensaft = "orangensaft",
  apfelsaft = "apfelsaft",
}

export enum SouceTypeEnum {
  mayonnaise = "mayonnaise",
  ketchup = "ketchup",
}

export enum FriesTypeEnum {
  pommes = "pommes",
  dippers = "dippers",
}

export enum MeatTypeEnum {
  kebab = "kebab",
  yaprak = "yaprak",
}

export enum CalzoneTypeEnum {
  gebacken = "gebacken",
  frittiert = "frittiert",
}

export interface CalzoneType {
  id: number;
  name: CalzoneTypeEnum.gebacken | CalzoneTypeEnum.frittiert;
  image: string;
}
