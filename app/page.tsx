import FeaturedProducts from "@/components/Home/FeaturedProducts";
import ActionBtnsBar from "@/components/Home/Hero/actionBtnsBar";
import ColCenterImage from "@/components/Home/Hero/colCenterImage";
import LargeCenterImage from "@/components/Home/Hero/LargeCenterImage";
import SideBar from "@/components/Home/Hero/sideBar";
import SocialBar from "@/components/Home/Hero/SocialBar";
import HomeLayout from "@/components/Home/HomeLayout";
import PurchaseOnline from "@/components/Home/PurchaseOnline";

export default function Home() {
  return (
    <>
      <HomeLayout>
        <SideBar>
          <SocialBar />
        </SideBar>
        <ColCenterImage />
        <ColCenterImage />
        <LargeCenterImage />
        <SideBar>
          <ActionBtnsBar />
        </SideBar>
      </HomeLayout>
      <FeaturedProducts/>
      <PurchaseOnline/>
    </>
  );
}
