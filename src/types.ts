export type Resolver<T extends object> = { [P in keyof T]?: (root: T) => T[P] } & {};

export type TypeValue = ClassType | symbol | Function;

export type TypeValueResolver = () => TypeValue;

export type ReturnTypeFunc = (returnType: void) => TypeValue;

export interface TypeOptions {
  array?: boolean;
  nullable?: boolean;
}

export interface ClassType {
  new (): any;
}
