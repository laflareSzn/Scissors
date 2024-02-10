import { Layout } from "../Layout/Layout";

export const ROUTES = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: "",
      }
    ]
  }
]
