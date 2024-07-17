export const adminRoutes2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "ELEMENT 1",
    },
    {
        name: "User Managment",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "ELEMENT 2",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "ELEMENT 3",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "ELEMENT 4",
            },
        ],
    },
] 

const newArray = adminRoutes2.reduce((acc, item) => {
    if (item.name && item.path) {
        acc.push({
            key: item.name,
            label: "NAVLINK"
        })
    }

    if (item.name && item.children) {
        acc.push({
            key: item.name,
            lebel: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: "NAVLINK"
            }))
        })
    }
    return acc
}, [])
console.log(JSON.stringify(newArray));

// const newArray = adminRoutes2.reduce((acc, item) => {
//     if (item.element && item.path) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.name && item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])

