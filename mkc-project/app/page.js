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
import SellingProduct from "@/components/SellingProduct/SellingProduct";
import MkcNews from "@/components/MkcNews/MkcNews";
import RealStories from "@/components/Realstories/RealStories";
import MkcYoutube from "@/components/MkcYoutube/MkcYoutube";
import MkcApp from "@/components/MkcApp/MkcApp";
import OnlineCourse from "@/components/onlineCourse/onlineCourse";
import DefenceCourses from "@/components/CourseDefenceExam/CourseDefenceExam";
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
      <CourseSubject />
      <SellingProduct /> 
      <MkcNews />
      <RealStories />
      <MkcYoutube />
      <MkcApp />
      <OnlineCourse />
      <DefenceCourses/>
      <BlogPage/>
      <AppreciationMkc/>
      <Footer/>
    </div>
  );
}
