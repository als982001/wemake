import { Outlet } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarProvider,
} from "~/common/components/ui/sidebar";

import MessageRoomCard from "../components/message-room-card";

export default function MessagesLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 20 }).map((_, index) => (
                <MessageRoomCard
                  key={index}
                  id={index.toString()}
                  name={`User ${index}`}
                  lastMessage={`Last message ${index}`}
                  avatarUrl={`https://github.com/serranoarevalo.png`}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className=" h-full flex-1">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
