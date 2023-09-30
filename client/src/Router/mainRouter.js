import React from "react";

export default function MainRoutes() {
  const Routes = useRoutes([
    // {
    //   element: <MainLayout />,
    //   path: '/',
    //   children: [
    //     {
    //       element: <PrivateRoutes />,
    //       children: [
    //         {
    //           path: "/profile",
    //           element: <Profile />,
    //           children: [
    //             {
    //               path: "accound",
    //               element: <Accound />
    //             },
    //             {
    //               path: "myvideo",
    //               element: <MyVideo />
    //             }
    //             , {
    //               path: "addvideo",
    //               element: <AddVideo />
    //             },
    //             {
    //               path: "favoritevideos",
    //               element: <FavoriteVideos />
    //             },
    //             {
    //               path: "followers",
    //               element: <Followers />
    //             },
    //             {
    //               path: "following",
    //               element: <Following />
    //             },
    //             {
    //               path: "questions",
    //               element: <MyQuestions />
    //             },
    //             {
    //               path:"todo",
    //               element:<Todo/>
    //             }
    //           ]
    //         },
    //       ]
    //     },
    //   ],
    // }, {
    //   element: <AuthRoutes />,
    //   children: [
    //     {
    //       path: "/login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "/register",
    //       element: <Register />
    //     },
    //     {
    //       path: "/forgot-password",
    //       element: <ForgotPassword />
    //     },
    //     {
    //       path: "/reset-password/:id",
    //       element: <ResetPassword />
    //     }
    //   ]
    // },
  ]);

  return Routes;
}
