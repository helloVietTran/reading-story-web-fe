import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '@/pages/home';
import Hot from '@/pages/hot';
import Following from '@/pages/following';
import History from '@/pages/history';
import FindStory from '@/pages/find-story';
import FindAdvanced from '@/pages/find-advanced';
import BoyStory from '@/pages/boy-story';
import GirlStory from '@/pages/girl-story';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import Story from '@/pages/story';
import Chapter from '@/pages/chapter';
import InformationPage from '@/pages/information';
import ForgotPasswordPage from '@/pages/forgot-password';
import ResetPasswordPage from '@/pages/reset-password';
import NotFound from '@/pages/not-found';
import UserPage from '@/pages/user';
import UserProfile from '@/components/Information/UserMainContent/UserProfile';
import ChangingPassword from '@/components/Information/UserMainContent/ChangingPassword';
import UserPoint from '@/components/Information/UserMainContent/UserPoint';
import Shop from '@/components/Information/UserMainContent/Shop';
import Dashboard from '@/components/Information/UserMainContent/Dashboard';
import MyComment from '@/components/Information/UserMainContent/MyComment';
import MyFollowedComic from '@/components/Information/UserMainContent/MyFollowedComic';

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/hot', element: <Hot /> },
    { path: '/following', element: <Following /> },
    { path: '/history', element: <History /> },
    { path: '/find-story', element: <FindStory /> },
    { path: '/find-story/:genre', element: <FindStory /> },
    { path: '/find-advanced', element: <FindAdvanced /> },
    { path: '/boy-story', element: <BoyStory /> },
    { path: '/girl-story', element: <GirlStory /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/reset-password', element: <ResetPasswordPage /> },
    { path: '/forgot-password', element: <ForgotPasswordPage /> },
    { path: '/users/:userId', element: <UserPage /> },

    { path: '/story/:storyName/:storyID', element: <Story /> },
    { path: '/story/:storyName/:storyID/:chap/', element: <Chapter /> },
    { path: '*', element: <NotFound /> },
    {
      path: '/secure',
      element: isAuthenticated ? <InformationPage /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'user-profile', element: <UserProfile /> },
        { path: 'changing-password', element: <ChangingPassword /> },
        { path: 'user-point', element: <UserPoint /> },
        { path: 'shop', element: <Shop /> },
        { path: 'my-comment', element: <MyComment /> },
        { path: 'followed-comic', element: <MyFollowedComic /> },
      ],
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) =>
        route.children ? (
          <Route key={index} path={route.path} element={route.element}>
            {route.children.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ) : (
          <Route key={index} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  );
};

export default AppRoutes;
