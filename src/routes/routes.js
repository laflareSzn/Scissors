import { Layout } from "../Layout/Layout";
import {Hero} from "../pages/Hero";
import Features from "../pages/Features";
import {Pricing} from "../pages/Pricing";
import {Analytics} from "../pages/Analytics";

export const ROUTES = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Hero/>,
      },
      {
        path: '',
        element: <Features/>
      },
      {
        path: '',
        element: <Pricing/>
      },
      {
        path: '',
        element: <Analytics/>
      }
    ]
  }
]
