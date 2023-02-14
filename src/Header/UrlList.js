// export const Url_List = [
//     {
//         title: "Home", url: "/"
//     }, {
//         title: "Client Site", url: "/client_site"
//     }, {
//         title: "Panel Site", url: "/panel_site"
//     },
//     {
//         title: "Rules ▾", url: "/rules"
//     },
//     , {
//         title: "Why Join Us ? ", url: "/why_join_us"
//     }
//     , {
//         title: "Contact Us", url: "/contect_us"
//     },
// ];

export const Url_List = [
    {
        title: "Home", url: "/"
    }, {
        title: "Client Site", url: "/client_site"
    }, {
        title: "Panel Site", url: "/panel_site"
    },
    {
        title: "Rules▾", url: "/rules" , submenu:[
          {  title:'WithdrawlRules',url:'/withdrawl_rules' },
          {  title:'RefillRules',url:'/refill_rules' },
           { title:'OnlineGamingRules',url:'/online_gaming_rules' }
        ]
    },
    , {
        title: "Why Join Us ? ", url: "/why_join_us"
    }
    , {
        title: "Contact Us", url: "/contect_us"
    },
    {   title: "Logout", url: "/logout"}
    // {title:"SignUp", url: "/signup"},
    // {   title: "Login", url: "/login"}
    // {
    //     title: "SignUp",submenu:[
    //         {title:"SignUp", url: "/signup"},
    //         {   title: "Login", url: "/login"}
    //     ]
    // },
   
]