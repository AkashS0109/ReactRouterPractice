import React from 'react'
import {Link,NavLink} from 'react-router-dom'

// Link is used in place of anchor tag bcz when we use <a></a>ta our page fully refreshes 
//  but in react we dont need refreshing so link tag is used bcs in <a> tag full page srefresh measn new domformed 

// Yes, when a page is refreshed due to an <a> tag (anchor) with a regular href attribute (like <a href="/some-page">Link</a>), 
// it means that the browser will make a full request to load the new page. This results in:

// Full page reload: The browser discards the current DOM and creates a new one for the requested page.
// Loss of state: Any JavaScript variables, React component states, or other in-memory data will be lost unless it's explicitly stored 
// (e.g., in localStorage or in a database).
// Re-rendering: The entire HTML, CSS, and JavaScript files are fetched again, and the page is re-rendered from scratch.
// To prevent a full page reload and preserve the state, you can use client-side routing with libraries like React Router in React apps. 
// Here's how you would handle navigation without a full page reload in React:

{/* <Link to="/"></Link> */}


export default function Header() {
        return (
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink 
                                     to="/"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 
                                             ${isActive? "text-orange-500":"text-gray-600"}
                                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                      to="/about"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 
                                             ${isActive? "text-orange-500":"text-gray-600"}
                                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                      to="/contact"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 
                                             ${isActive? "text-orange-500":"text-gray-600"}
                                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                      to="/github"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 
                                             ${isActive? "text-orange-500":"text-gray-600"}
                                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    
