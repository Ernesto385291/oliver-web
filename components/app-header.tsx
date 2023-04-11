"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { LogOut, Plus, Settings, User, HelpCircle, Bell } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ListItem } from "@/components/ui/list-items";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const AppHeader = () => {
  const services: {
    title: string;
    href?: string;
    content?: { title: string; href: string; description: string }[];
  }[] = [
    {
      title: "Ventas",
      content: [
        {
          title: "Transacciones",
          href: "/balance",
          description: "Ver el balance de tus transacciones",
        },
        {
          title: "Vender",
          href: "/sell",
          description: "Un POS para vender tus productos de forma rápida",
        },
        {
          title: "Pedidos",
          href: "/orders",
          description: "Maneja y administra tus pedidos de forma fácil",
        },
      ],
    },
    {
      title: "Contactos",
      content: [
        {
          title: "Clientes",
          href: "/clients",
          description: "Administra tus clientes de forma fácil",
        },
        {
          title: "Proveedores",
          href: "/suppliers",
          description: "Administra tus proveedores de forma fácil",
        },
      ],
    },
    {
      title: "Deudas",
      href: "/debts",
    },
    {
      title: "Inventario",
      href: "/inventory",
    },
    {
      title: "Reportes",
      href: "/stats",
    },
    {
      title: "Shop",
      href: "/shop",
    },
  ];

  return (
    <header className="h-[65px] w-full sticky top-0 z-40 flex justify-between px-4 border-b border-b-slate-200 bg-[#1F2939]">
      <aside className="flex items-center gap-8">
        <Link href="/">
          <div>
            <Image
              src="/images/logo/oliver_logo_white.png"
              alt="Oliver Logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[80px] h-auto"
            />
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {services.map((service) => (
              <NavigationMenuItem key={service.title}>
                {service.href ? (
                  <Link href={service.href}>
                    <span className={navigationMenuTriggerStyle()}>
                      {service.title}
                    </span>
                  </Link>
                ) : (
                  <React.Fragment>
                    <NavigationMenuTrigger className="text-white">
                      {service.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4">
                        {service.content?.map((content) => (
                          <ListItem
                            key={content.title}
                            title={content.title}
                            href={content.href}
                          >
                            {content.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </React.Fragment>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      <aside className="flex items-center space-x-2">
        <nav className="flex items-center space-x-1">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              className: "text-white hover:bg-slate-500",
            })}
          >
            <Plus className="h-5 w-5" />
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              className: "text-white hover:bg-slate-500",
            })}
          >
            <Bell className="h-5 w-5" />
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              className: "text-white hover:bg-slate-500",
            })}
          >
            <HelpCircle className="h-5 w-5" />
          </div>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#6A2062] text-sm text-white">
                  EV
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start items-baseline text-white gap-1">
                <span className="text-left text-sm font-medium leading-none">
                  Ernesto
                </span>
                <span className="text-left text-xs text-gray-400 leading-none">
                  Administrador
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-4">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Editar negocio</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Cambia de negocio</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>
    </header>
  );
};
