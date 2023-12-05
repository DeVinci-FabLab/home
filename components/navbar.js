// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { withRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ router }) => {
  const pn = router.pathname;
  const navigations = [
    { name: "Accueil", href: "/", current: pn == "/" },
    { name: "MyFab", href: "https://my.devinci-fablab.fr/", current: false },
    //{ name: "Blog", href: "/blog", current: pn.split('/')[1] == "blog" },
  ];

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/logo.png"
                    alt="Fablab"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/logoName.png"
                    alt="Fablab"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  {navigations.map((navigation, index) => {
                    return (
                      <Link key={index} href={navigation.href} className={"flex"}>
                        <p
                          className={`${
                            navigation.current
                              ? `border-indigo-500 text-gray-900`
                              : `border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`
                          } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                        >
                          {navigation.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigations.map((r, index) => {
                return (
                  <a
                    key={index}
                    href={r.href}
                    className={`${
                      r.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
                  >
                    {r.name}
                  </a>
                );
              })}
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default withRouter(Navbar);