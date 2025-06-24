export interface Page {
  url: string;
  pageTitle: string;
}

export interface PageIndex {
  pages: Page[];
}

export interface SidebarPage {
  title: string;
  url: string;
}

export interface SidebarSubsection {
  title: string;
  pages: SidebarPage[];
}

export interface SidebarSection {
  title: string;
  subsections: SidebarSubsection[];
}
