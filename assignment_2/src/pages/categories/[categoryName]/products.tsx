import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types";
import { getCategoryProducts } from "@/products-service";
import ProductList  from "../../../components/ProductList";

const CategoryProducts = () => {
  const router = useRouter();
  const { categoryName } = router.query;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (categoryName) {
        const products: Product[] = await getCategoryProducts(
          categoryName as string
        );

        setProducts(products);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);


  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Products in {categoryName}
      </h1>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryProducts;