import { routes } from "@/config/routes";

interface NavItem {
  label: string;
  page: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    page: routes.home,
  },
  {
    label: "About",
    page: routes.about,
  },
  {
    label: "Projects",
    page: routes.projects,
  },
];
