import Skeleton from "react-loading-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Skeleton count={4}/>
    </main>
  );
};

export default ProductDetailSkeleton;
