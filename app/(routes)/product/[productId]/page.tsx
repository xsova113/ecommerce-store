import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import React from "react";
import { Separator } from "@/components/ui/separator";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) return null;

  return (
    <div className="pt-14">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info product={product} />
            </div>
          </div>
          <Separator className="my-10" />
          <ProductList title={"Related Items"} items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
