import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = Experiences;
  if (tabVal === "Ethereum") {
    expArr = expArr.filter((val) => val.type === "Ethereum");
  } else if (tabVal === "Solana") {
    expArr = expArr.filter((val) => val.type === "Solana");
  }else if (tabVal === "Pumpfun") {
    expArr = expArr.filter((val) => val.type === "Pumpfun");
  }else if (tabVal === "AI Agent") {
    expArr = expArr.filter((val) => val.type === "AI Agent");
  }else if (tabVal === "NFT") {
    expArr = expArr.filter((val) => val.type === "NFT");
  }else if (tabVal === "BSC") {
    expArr = expArr.filter((val) => val.type === "BSC");
  }else if (tabVal === "Bot") {
    expArr = expArr.filter((val) => val.type === "Bot");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[50rem] grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="AI Agent">AI Agent</TabsTrigger>
          <TabsTrigger value="Ethereum">Ethereum</TabsTrigger>
          <TabsTrigger value="Solana">Solana</TabsTrigger>
          <TabsTrigger value="BSC">BSC</TabsTrigger>
          <TabsTrigger value="Bot">Bot</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="AI Agent">{renderContent("AI Agent")}</TabsContent>
        <TabsContent value="Ethereum">
          {renderContent("Ethereum")}
        </TabsContent>
        <TabsContent value="Solana">{renderContent("Solana")}</TabsContent>
        <TabsContent value="BSC">{renderContent("BSC")}</TabsContent>
        <TabsContent value="NFT">{renderContent("NFT")}</TabsContent>
        <TabsContent value="Pumpfun">{renderContent("Pumpfun")}</TabsContent>
        <TabsContent value="Bot">{renderContent("Bot")}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}
