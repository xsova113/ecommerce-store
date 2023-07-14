import getBilboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/Billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboardId = "17e17a91-df1a-4982-a362-4dcf9f7cffa1";
  const billboard = await getBilboard(billboardId);
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
