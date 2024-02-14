import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import { Link } from "react-router-dom";

const Navbar = () => {
    const itemRenderer = (item) => (
        <Link className="flex align-items-center p-menuitem-link" to={item.url}>
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Shop',
            icon: 'pi pi-star',
            // url: 'shop'
        },
        {
            label: 'Category',
            icon: 'pi pi-search',
            // url: 'category',
            items: [
                {
                    label: 'Shoes',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Cooking',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'Beauty Products',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Fruits and Vegetables',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Frozen Fish',
                            icon: 'pi pi-palette',
                            //badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'Dried Fish',
                            icon: 'pi pi-palette',
                           // badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            // url:'contact',
           //badge: 3,
            template: itemRenderer
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );
    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
        
    );
};

export default Navbar;