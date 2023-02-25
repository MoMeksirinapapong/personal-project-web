import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import ProtectionRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectifAuthenticate';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import TargetPage from '../pages/targetPage';
import AboutPage from '../pages/aboutPage';
import RegisterPage from '../pages/registerPage';
import ProfilePage from '../pages/profilePage';
import HomePage from '../pages/homePage';


const router = createBrowserRouter([
{
    path: '/login',
    element:(
    <RedirectIfAuthenticate>
    <LoginPage />
    </RedirectIfAuthenticate>
    )
},
{
    element:(
        <ProtectionRoute>
            <AuthLayout/>
        </ProtectionRoute>
    ), 
    children: [
{
    path: '/',
    element:<HomePage/>
},
{
    path: '/target',
    element:<TargetPage />
},
{
    path: '/about',
    element:<AboutPage />
},
{
    path: '/register',
    element:<RegisterPage />
},
{
    path: '/profile',
    element:<ProfilePage />
}
]
},{
    path: '/test',
    element: <h1>Test</h1>
}
]);

export default function Router(){
    return <RouterProvider router={router}/>;
}