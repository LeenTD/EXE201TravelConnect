
import Home from '../pages/Home';
import Course from '../pages/Course';
import DefaultLayout from '../layouts/DefaultLayout';
import RoutePath from './RoutePath';
import PageLayout from '../layouts/PageLayout';
import Teacher from '../pages/Teacher';
import CourseSingle from '../components/CourseSingle';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import LoginForm from '../pages/LoginForm';
import SignupForm from '../pages/SignupForm';
import TeacherSingle from '../components/TeacherSingle';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import QRScan from '../pages/QRScan';
import AdminUser from '../pages/AdminUser';
import AdminLayout from '../layouts/AdminLayout';
import AdminTutor from '../pages/AdminTutor';
import AdminTeacher from '../pages/AdminTeacher';
import AdminBooking from '../pages/AdminBooking';
import AdminSubject from '../pages/AdminSubject';
import AdminPayment from '../pages/AdminPayment';

const PublicRoutes = [
    {
        path: RoutePath.HOME,
        element: Home,
        layout: DefaultLayout
    },
    {
        path: RoutePath.COURSE,
        element: Course,
        layout: PageLayout
    },
    {
        path: RoutePath.TEACHERS,
        element: Teacher,
        layout: PageLayout
    },
    {
        path: RoutePath.COURSESINGLE,
        element: CourseSingle,
        layout: PageLayout
    },
    {
        path: RoutePath.ABOUTUS,
        element: AboutUs,
        layout: PageLayout 
    },
    {
        path: RoutePath.SERVICES,
        element: Services,
        layout: PageLayout 
    },
    {
        path: RoutePath.LOGIN,
        element: LoginForm,
        layout: PageLayout 
    },
    {
        path: RoutePath.REGISTER,
        element: SignupForm,
        layout: PageLayout 
    },
    {
        path: RoutePath.TEACHERSINGLE,
        element: TeacherSingle,
        layout: PageLayout 
    },
    {
        path: RoutePath.CART,
        element: Cart,
        layout: PageLayout 
    },
    {
        path: RoutePath.CHECKOUT,
        element: Checkout,
        layout: PageLayout 
    },
    {
        path: RoutePath.QR,
        element: QRScan,
        layout: PageLayout 
    },
    {
        path: RoutePath.ADMINUSER,
        element: AdminUser,
        layout: AdminLayout 
    },
    {
        path: RoutePath.ADMINTUTOR,
        element: AdminTutor,
        layout: AdminLayout 
    },
    {
        path: RoutePath.ADMINTEACHER,
        element: AdminTeacher,
        layout: AdminLayout 
    },
    {
        path: RoutePath.ADMINBOOKING,
        element: AdminBooking,
        layout: AdminLayout 
    },
    {
        path: RoutePath.ADMINCOURSE,
        element: AdminSubject,
        layout: AdminLayout 
    },
    {
        path: RoutePath.ADMINPAYMENT,
        element: AdminPayment,
        layout: AdminLayout 
    }
    
    
]

const PrivateRoutes = [

]

export  {PublicRoutes, PrivateRoutes}