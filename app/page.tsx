import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ProductOverview from "@/components/ProductOverview";
import GradeVariants from "@/components/GradeVariants";
import SpecsTable from "@/components/SpecsTable";
import Certifications from "@/components/Certifications";
import ExportShipping from "@/components/ExportShipping";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1565C0] text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <ProductOverview />
        <GradeVariants />
        <SpecsTable />
        <Certifications />
        <ExportShipping />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
