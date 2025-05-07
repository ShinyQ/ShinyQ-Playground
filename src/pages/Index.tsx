
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TechStack from "@/components/home/TechStack";
import LatestBlogs from "@/components/home/LatestBlogs";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TechStack />
      <LatestBlogs />
    </Layout>
  );
};

export default Index;
