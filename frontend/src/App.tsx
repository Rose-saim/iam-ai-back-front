import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { UserProvider } from './components/UserContext';

// Main Pages
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Courses from './pages/Courses';
import Careers from './pages/Careers';

// Authentication Pages
import RegisterBusiness from './pages/auth/RegisterBusiness';
import RegisterIndividual from './pages/auth/RegisterIndividual';
import RegisterExpert from './pages/auth/RegisterExpert';
import Login from './pages/auth/Login';
import SelectAccountType from './components/SelectAccountType';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import Admindashboard from './pages/admin/AdminDashboard';
import AdminSettings from './pages/admin/AdminSettings';
import AdminReports from './pages/admin/AdminReports';
import AdminNotifications from './pages/admin/AdminNotifications';
import SystemSettings from './pages/admin/SystemSettings';


// Service Pages
import B2B from './pages/services/B2B';
import B2C from './pages/services/B2C';
import B2BLearnMore from './pages/services/learn-more/B2BLearnMore';
import B2CLearnMore from './pages/services/learn-more/B2CLearnMore';
import IndustryToolkits from './pages/services/details/IndustryToolkits';
import ChangeManagement from './pages/services/details/ChangeManagement';
import AITraining from './pages/services/details/AITraining';

// // Business dashboard Pages
// import BusinessTraining from './pages/dashboard/business/BusinessTraining';
// import TeamManagement from './pages/dashboard/business/TeamManagement';
// import AITools from './pages/dashboard/business/AITools';
// import BusinessMetrics from './pages/dashboard/business/BusinessMetrics';

// // Individual dashboard Pages
// import MyCourses from './pages/dashboard/individual/MyCourses';
// import Certifications from './pages/dashboard/individual/Certifications';
// import LearningPath from './pages/dashboard/individual/LearningPath';
// import Community from './pages/dashboard/individual/Community';

// // Payment and Checkout Pages
// import Checkout from './pages/payment/Checkout';
// import PaymentSuccess from './pages/payment/PaymentSuccess';
// import PaymentCancel from './pages/payment/PaymentCancel';

// Terms and Privacy Pages
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Case Studies Pages
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';

// Course Detail Pages
import CourseDetail from './pages/courses/CourseDetail';

// Certificate Pages
import CertificateView from './pages/certificates/CertificateView';

// // Profile Pages
// import UserProfile from './pages/profile/UserProfile';
// import ProfileSettings from './pages/profile/ProfileSettings';

// Help & Support Pages
import Help from './pages/help/Help';
import ContactSupport from './pages/help/ContactSupport';

// Newsletter Subscription
import Newsletter from './pages/Newsletter';

// Resource Pages
import Guides from './pages/resources/Guides';
import CaseStudies from './pages/resources/CaseStudies';
import Webinars from './pages/resources/Webinars';
import Articles from './pages/resources/Articles';

// Enrollment Pages
import EnrollmentForm from './pages/enrollment/EnrollmentForm';

// Project Pages
import ProjectDetail from './pages/projects/ProjectDetail';

// // Student Pages
// import Studentdashboard from './pages/student/Studentdashboard';
// import StudentCourses from './pages/student/StudentCourses';
// import StudentProgress from './pages/student/StudentProgress';
// import StudentCertificates from './pages/student/StudentCertificates';

// // Expert Pages
// import ExpertMissions from './pages/expert/ExpertMissions';
// import ExpertTrainings from './pages/expert/ExpertTrainings';
// import ExpertCalendar from './pages/expert/ExpertCalendar';
// import ExpertAnalytics from './pages/expert/ExpertAnalytics';
// import ExpertMessaging from './pages/expert/ExpertMessaging';
// import ExpertProfile from './pages/expert/ExpertProfile';
// import ExpertFinance from './pages/expert/ExpertFinance';
// import ExpertSupport from './pages/expert/ExpertSupport';
// import ExpertSettings from './pages/expert/ExpertSettings';
// import ExpertReports from './pages/expert/ExpertReports';
// import ExpertFeedback from './pages/expert/ExpertFeedback';
// import ExpertCommunity from './pages/expert/ExpertCommunity';
// import ExpertCourses from './pages/expert/ExpertCourses';
// import ExpertReviews from './pages/expert/ExpertReviews';
// import ExpertEarnings from './pages/expert/ExpertEarnings';

// Error Pages
import NotFound from './pages/error/NotFound';
import ServerError from './pages/error/ServerError';
import Maintenance from './pages/error/Maintenance';
// import Businessdashboard from './components/dashboard/business/BusinessDashboard';
// import Individualdashboard from './components/dashboard/Individualdashboard';
// import Expertdashboard from './components/dashboard/Expertdashboard';

export default function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />

          {/* Authentication Routes
          <Route path="/register-business" element={<RegisterBusiness />} />
          <Route path="/register-individual" element={<RegisterIndividual />} />
          <Route path="/register-expert" element={<RegisterExpert />} />
          <Route path="/login" element={<Login />} />
          <Route path="/select-account-type" element={<SelectAccountType />} /> */}

          {/* Admin Routes
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Admindashboard />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
          <Route path="/admin/system" element={<SystemSettings />} /> */}

          {/* dashboard Routes
          <Route path="/dashboard" element={<dashboard />} />

          <Route path="/dashboard/business" element={<Businessdashboard />} />
          <Route path="/dashboard/individual" element={<Individualdashboard />} />
          <Route path="/dashboard/expert" element={<Expertdashboard/>} />
           */}
          {/* Service Routes */}
          <Route path="/services/b2b" element={<B2B />} />
          <Route path="/services/b2c" element={<B2C />} />

          {/* Learn More Routes */}
          <Route path="/services/b2b/learn-more" element={<B2BLearnMore />} />
          <Route path="/services/b2b/toolkits" element={<IndustryToolkits />} />
          <Route path="/services/b2b/changemanagement" element={<ChangeManagement />} />
          
          <Route path="/services/b2c/learn-more" element={<B2CLearnMore />} />
          <Route path="/services/b2c/aitraining" element={<AITraining />} />
          <Route path="/services/b2c/resources" element={<Resources />} />

          {/* Business dashboard Routes
          <Route path="/dashboard/training" element={<BusinessTraining />} />
          <Route path="/dashboard/team" element={<TeamManagement />} />
          <Route path="/dashboard/tools" element={<AITools />} />
          <Route path="/dashboard/metrics" element={<BusinessMetrics />} /> */}

          {/* Individual dashboard Routes
          <Route path="/dashboard/courses" element={<MyCourses />} />
          <Route path="/dashboard/certifications" element={<Certifications />} />
          <Route path="/dashboard/progress" element={<LearningPath />} />
          <Route path="/dashboard/community" element={<Community />} /> */}

          {/* Payment Routes
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} /> */}

          {/* Legal Routes */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Case Studies Routes */}
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />

          {/* Course Routes */}
          <Route path="/courses/:id" element={<CourseDetail />} />

          {/* Certificate Routes */}
          <Route path="/certificates/:id" element={<CertificateView />} />

          {/* Profile Routes
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} /> */}

          {/* Help Routes */}
          <Route path="/help" element={<Help />} />
          <Route path="/contact-support" element={<ContactSupport />} />

          {/* Newsletter Routes */}
          <Route path="/newsletter" element={<Newsletter />} />

          {/* Resource Routes */}
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/resources/articles" element={<Articles />} />

          {/* Enrollment Routes */}
          <Route path="/enroll/:courseId" element={<EnrollmentForm />} />

          {/* Project Routes
          <Route path="/projects/:id" element={<ProjectDetail />} /> */}

          {/* Student Routes
          <Route path="/student/dashboard" element={<Studentdashboard />} />
          <Route path="/student/courses" element={<StudentCourses />} />
          <Route path="/student/progress" element={<StudentProgress />} />
          <Route path="/student/certificates" element={<StudentCertificates />} /> */}

          {/* Expert Routes
          <Route path="/expert/missions" element={<ExpertMissions />} />
          <Route path="/expert/trainings" element={<ExpertTrainings />} />
          <Route path="/expert/calendar" element={<ExpertCalendar />} />
          <Route path="/expert/analytics" element={<ExpertAnalytics />} />
          <Route path="/expert/messaging" element={<ExpertMessaging />} />
          <Route path="/expert/profile" element={<ExpertProfile />} />
          <Route path="/expert/profile/:id" element={<ExpertProfile />} />
          <Route path="/expert/finance" element={<ExpertFinance />} />
          <Route path="/expert/support" element={<ExpertSupport />} />
          <Route path="/expert/settings" element={<ExpertSettings />} />
          <Route path="/expert/reports" element={<ExpertReports />} />
          <Route path="/expert/feedback" element={<ExpertFeedback />} />
          <Route path="/expert/community" element={<ExpertCommunity />} />
          <Route path="/expert/courses" element={<ExpertCourses />} />
          <Route path="/expert/reviews" element={<ExpertReviews />} />
          <Route path="/expert/earnings" element={<ExpertEarnings />} /> */}

          {/* Error Routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}
