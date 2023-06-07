import { MainLayout } from "@/components/layouts/MainLayoutWithoutHeader";
import { NextPageWithLayout } from "../_app";

const Pricing: NextPageWithLayout = () => {
  return <p>Pricing</p>;
};

export default Pricing;

Pricing.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout title="Pricing">{page}</MainLayout>;
};
