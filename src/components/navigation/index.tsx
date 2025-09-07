import { MessageSquareMore } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "../ui/sidebar";
import { Link } from "@tanstack/react-router";

const items = [
  {
    title: "리뷰 생성기",
    url: "/reviews",
    icon: MessageSquareMore,
  },
];

const Navigation = () => {
  return (
    <Sidebar collapsible="icon" variant="inset" side="left">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="홈" asChild>
              <Link to="/">
                <img
                  src="./logo.webp"
                  alt="rubato logo"
                  loading="lazy"
                  width={30}
                  height={30}
                  className="me-1 rounded-[5px] transition-all group-data-collapsible:size-7 group-data-[collapsible=icon]:size-8"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const { title, url } = item;
                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild tooltip={title}>
                      <Link to={url}>
                        <item.icon />
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Navigation;
