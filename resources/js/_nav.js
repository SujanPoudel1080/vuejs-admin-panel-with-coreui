export default [
    {
        component: "CNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
        // badge: {
        //     color: "primary",
        //     text: "NEW",
        // },
    },
    {
        component: "CNavTitle",
        name: "Users",
    },
    {
        component: "CNavItem",
        name: "Users",
        to: "/users",
        icon: "cil-drop",
    },
    {
        component: "CNavItem",
        name: "Add Users",
        to: "/users/add",
        icon: "cil-drop",
    },


    {
        component: "CNavTitle",
        name: "Settings",
    },
    {
        component: "CNavGroup",
        name: "User Settings",
        to: "/users",
        icon: "cil-star",

    },
    //   {
    //     component: 'CNavTitle',
    //     name: 'Extras',
    //   },
    //   {
    //     component: 'CNavGroup',
    //     name: 'Pages',
    //     to: '/pages',
    //     icon: 'cil-star',
    //     items: [
    //       {
    //         component: 'CNavItem',
    //         name: 'Login',
    //         to: '/pages/login',
    //       },
    //       {
    //         component: 'CNavItem',
    //         name: 'Register',
    //         to: '/pages/register',
    //       },
    //       {
    //         component: 'CNavItem',
    //         name: 'Error 404',
    //         to: '/pages/404',
    //       },
    //       {
    //         component: 'CNavItem',
    //         name: 'Error 500',
    //         to: '/pages/500',
    //       },
    //     ],
    //   },
];
