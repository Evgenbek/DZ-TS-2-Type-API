type ApiResponse = {
  products: Products[];
  total: 194;
  skip: 0;
  limit: 30;
};

type Products = {
  id: number;
  title: string;
  description: string;
  category: 'beauty' | 'fragrances' | 'furniture' | 'groceries';
  price: number;
  discountPercentage: number;
  rating: 1 | 2 | 3 | 4 | 5 ;
  stock: number;
  tags: Tags;
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: WarrantyInformation;
  shippingInformation: ShippingInformation;
  availabilityStatus: 'In Stock' | 'Low Stock';
  reviews: Reviews[];
  returnPolicy: '7 days return policy' | '30 days return policy' | '60 days return policy' | '90 days return policy' | 'No return policy';
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};
type WarrantyInformation = '1 week warranty' | '1 year warranty' | '3 months warranty' | '3 year warranty' | '1 month warranty' | '6 months warranty' | 'Lifetime warranty' | '5 year warranty' | '2 year warranty' | 'No warranty';

type ShippingInformation = 'Ships in 3-5 business days' | 'Ships in 2 weeks' | 'Ships in 1-2 business days' | 'Ships in 1 week' | 'Ships overnight' | 'Ships in 1 month';

type Tags = ('beauty' | 'mascara' | 'eyeshadow' | 'face powder' | 'lipstick' | 'nail polish' | 'fragrances' | 'perfumes' | 'beds' | 'furniture' | 'sofas' | 'bedside tables' | 'office chairs' | 'bathroom' | 'fruits' | 'meat' | 'pet supplies' | 'cat food' | 'cooking essentials' | 'vegetables' | 'dog food'| 'dairy' | 'seafood' | 'condiments' | 'desserts' | 'beverages')[];

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Reviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data: ApiResponse) => {
    console.log(data.products);
  });
