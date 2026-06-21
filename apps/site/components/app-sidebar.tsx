"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { chaptersByPart } from "@frontend-internals/content";
import { Search, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const groups = chaptersByPart();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-3 py-1.5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Terminal className="size-3" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-sm">
                    frontend internals
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="px-3 pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                variant="outline"
                onClick={() =>
                  document.dispatchEvent(new CustomEvent("open-search"))
                }
                className="w-full text-xs"
              >
                <Search className="size-3.5" />
                <span className="flex-1 text-left">Search&hellip;</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-sidebar-border bg-sidebar-background px-1.5 font-mono text-[10px] font-medium opacity-100">
                  <span>⌘</span>K
                </kbd>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {Array.from(groups.entries()).map(([part, chs]) => (
          <SidebarGroup key={part}>
            <SidebarGroupLabel>{part}</SidebarGroupLabel>
            <SidebarMenu>
              {chs.map((ch) => {
                const href = `/${ch.slug}`;
                const active = pathname === href;
                return (
                  <SidebarMenuItem key={ch.slug}>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link href={href}>
                        <span className="font-mono text-[11px] w-5 shrink-0 text-right opacity-50">
                          {ch.num}
                        </span>
                        <span className="truncate">{ch.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
