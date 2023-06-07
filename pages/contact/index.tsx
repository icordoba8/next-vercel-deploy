import { MainLayout } from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const Contact: NextPageWithLayout = () => {
  const title: string = "Contact";
  return <p>Contact-2</p>;
};

export default Contact;

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout title="Contact">{page}</MainLayout>;
};
