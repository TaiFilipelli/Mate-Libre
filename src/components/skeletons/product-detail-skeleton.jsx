import { Skeleton } from "keep-react"

const ProductDetailSkeleton = () => {
  return (
    <main className="flex items-center justify-center h-screen">
    <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-4 w-full"/>
        <Skeleton.Line className="h-52 w-full"/>
        <Skeleton.Line className="h-6 w-full"/>
        <Skeleton.Line className="h-4 w-full"/>
    </Skeleton>
    </main>
  );
};

export default ProductDetailSkeleton;
