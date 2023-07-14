import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/container";
import FIlter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/MobileFilters";

interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <Container className="">
      <Billboard data={category.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block">
            <FIlter valueKey="sizeId" name="Sizes" data={sizes} />
            <FIlter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {!products.length ? (
              <NoResults />
            ) : (
              <div className="grid grid-cos-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} item={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
