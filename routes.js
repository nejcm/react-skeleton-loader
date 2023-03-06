import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react-skeleton-loader/',
    component: ComponentCreator('/react-skeleton-loader/', 'a79'),
    routes: [
      {
        path: '/react-skeleton-loader/',
        component: ComponentCreator('/react-skeleton-loader/', '558'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/Skeleton',
        component: ComponentCreator('/react-skeleton-loader/api/Skeleton', '271'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/templates/Card',
        component: ComponentCreator('/react-skeleton-loader/api/templates/Card', 'a13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/templates/Comment',
        component: ComponentCreator('/react-skeleton-loader/api/templates/Comment', '670'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/templates/Form',
        component: ComponentCreator('/react-skeleton-loader/api/templates/Form', '01c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/templates/Paragraph',
        component: ComponentCreator('/react-skeleton-loader/api/templates/Paragraph', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/api/templates/Table',
        component: ComponentCreator('/react-skeleton-loader/api/templates/Table', '3d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/category/api',
        component: ComponentCreator('/react-skeleton-loader/category/api', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/category/templates',
        component: ComponentCreator('/react-skeleton-loader/category/templates', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/react-skeleton-loader/installation',
        component: ComponentCreator('/react-skeleton-loader/installation', 'a57'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
