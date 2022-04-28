export type ProductNagivationProps = {
  id?: string;
}

export type OrderNagivationProps = {
  id: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      product: ProductNagivationProps;
      order: OrderNagivationProps;
      orders: undefined;
    }
  }
}