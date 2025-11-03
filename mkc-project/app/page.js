import AppreciationMkc from "@/components/AppreciationMKC/appreciationMKC";
import BlogPage from "@/components/BlogPage/BlogPage";
import CardsPage from "@/components/CardsPage/cardsPage";
import Footer from "@/components/Footer/footer";
import FreeLearningCourse from "@/components/FreeLearningCourse/FreeLearningCourse";
import Header from "@/components/Header/header";
import Moreinnda from "@/components/Moreinnda/Moreinnda";
import NdaFoundation from "@/components/NdaFoundation/ndaFoundation";
import UpcomingBatches from "@/components/Upcomingbatches/Upcomingbatches";
import WhatYouLearn from "@/components/WhatYouLearn/WhatYouLearn";
import Whymkc from "@/components/Whymkc/Whymkc";
import CourseSubject from "@/components/CourseSubject/courseSubject";
export default function Home() {
  return (
    <div>
      <Header/>
      <NdaFoundation/>
      <CardsPage />
      <WhatYouLearn />
      <Whymkc />
      <UpcomingBatches />
      <Moreinnda />
      <FreeLearningCourse />
      <CourseSubject/>
      <BlogPage/>
      <AppreciationMkc/>
      <Footer/>
    </div>
  );
}
