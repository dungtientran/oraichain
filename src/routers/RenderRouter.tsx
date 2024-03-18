import React, { FC } from "react";
import { RouteObject, useRoutes } from "react-router";
import WrapperRoute from "./WrapperRoute";

const routeList: RouteObject[] = [
  // {
  //   path: '/login',
  //   element: <WrapperRoute element={<LoginPage />} titleId="title.login" />,
  // },
  // {
  //   path: '/',
  //   element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboard" />,
  //     },
  //   ],
  // },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
