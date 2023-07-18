import AboutUs from "../pages/cms_pages/AboutUs";
import Blog from "../pages/blog/Blog";
import BlogDetail from "../pages/blog/BlogDetail";
import ContactUs from "../pages/contact_us";
import FAQ from "../pages/cms_pages/Faq";
import ForgotPassword from "../pages/ForgotPassword";
import HelpAndSupport from "../pages/cms_pages/HelpAndSupport";
import Home from "../pages";
import HowItWorks from "../pages/cms_pages/HowItWorks";
import PostJob from "../pages/jobs/PostJob";
import PrivacyPolicy from "../pages/cms_pages/PrivacyPolicy";
import TermsAndCondition from "../pages/cms_pages/TermsAndConditions";
import Testimonials from "../pages/Testimonials";
import BrowseJob from "../pages/jobs/BrowseJob";
import JobDetail from "../pages/jobs/JobDetail";
import Chat from "../pages/Chat";
import List from "../pages/list/List";

export const webRoutes = [
  { index: true, element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/login", element: <Home /> },
  { path: "forgot_password", element: <ForgotPassword /> },
  { path: "contact_us", element: <ContactUs /> },
  { path: "testimonials", element: <Testimonials /> },
  { path: "how_it_works", element: <HowItWorks /> },
  { path: "terms_conditions", element: <TermsAndCondition /> },
  { path: "privacy_policy", element: <PrivacyPolicy /> },
  { path: "faq", element: <FAQ /> },
  { path: "about_us", element: <AboutUs /> },
  { path: "help_support", element: <HelpAndSupport /> },
  { path: "browse_job", element: <BrowseJob /> },
  { path: "job_detail", element: <JobDetail /> },
  { path: "chat", element: <Chat /> },
  { path: "blog", element: <Blog /> },
  { path: "blog_detail/:id", element: <BlogDetail /> },
  { path: "post_job", element: <PostJob /> },
  { path: "list", element: <List /> },
];
