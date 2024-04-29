import ProductCardShadcn, { ProductProps2 } from '../components/ProductCardShadcn';
import ProductCardRadixUI from '../components/ProductCardRadixUI';
import { ProductProps } from '../components/ProductCardRadixUI';

interface RouteConfig {
  path: string;
  exact?: boolean;
  component: React.FC<ProductProps> | React.FC<ProductProps2>; 
}

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: ProductCardRadixUI 
  },
  {
    path: '/card2',
    exact: true,
    component: ProductCardShadcn
  },
];

export default routesConfig;
