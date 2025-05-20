import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();


  return ( <>

  <ProductList limit={4} data ={latestProducts} title="Newest Arrivals" />

  </> )

}

export default HomePage;