import rawContent from "./siteContent.json";

export interface ProfileLocation {
  campus: string;
  address: string;
  description: string;
  buildingNote: string;
  campusImageUrl: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  headshotUrl: string;
  instituteLogoUrl: string;
  fiuSealUrl: string;
  googleScholarUrl: string;
  email: string;
  officePhone: string;
  labPhone: string;
  labName: string;
  labShortName: string;
  labLogoUrl: string;
  location: ProfileLocation;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface ResearchFocusArea {
  id: string;
  title: string;
  tag: string;
  icon: string;
  description: string;
}

export interface AnalyticalMethod {
  name: string;
  badge: string;
  detail: string;
}

export interface LabImage {
  url: string;
  caption: string;
}

export interface ResearchData {
  sectionTitle: string;
  overview: string;
  focusAreas: ResearchFocusArea[];
  analyticalMethods: {
    title: string;
    description: string;
    methods: AnalyticalMethod[];
  };
  laboratoryImages: LabImage[];
}

export interface TeamMember {
  name: string;
  role: string;
  researchFocus?: string;
  imageUrl?: string | null;
}

export interface TeamCategory {
  id: string;
  categoryName: string;
  members: TeamMember[];
}

export interface TeamData {
  sectionTitle: string;
  overview: string;
  categories: TeamCategory[];
}

export interface PublicationCategory {
  name: string;
  icon: string;
  description: string;
}

export interface PublicationItem {
  year: string;
  badge: string;
  tags: string[];
  citation: string;
  doi?: string;
}

export interface PublicationsData {
  sectionTitle: string;
  intro: string;
  googleScholarUrl: string;
  categories: PublicationCategory[];
  items: PublicationItem[];
}

export interface GrantItem {
  agency: string;
  amount: string;
  period: string;
  title: string;
  logoUrl?: string;
  link?: string;
}

export interface MediaItem {
  type: "tv" | "news";
  title: string;
  outlet: string;
  detail?: string;
}

export interface GrantsAndProjectsData {
  sectionTitle: string;
  grantsSubtitle: string;
  grants: GrantItem[];
  mediaSubtitle: string;
  media: MediaItem[];
}

export interface PresentationYear {
  year: string;
  items: string[];
}

export interface PostersAndPresentationsData {
  sectionTitle: string;
  overview: string;
  presentationYears: PresentationYear[];
  keyConferences: string[];
  studentHighlights: string[];
  galleryNote: string;
  posterImages: string[];
}

export interface CourseItem {
  code: string;
  name: string;
}

export interface TeachingData {
  sectionTitle: string;
  intro: string;
  graduateCourses: CourseItem[];
  undergraduateCourses: CourseItem[];
  classroomImageUrl: string;
}

export interface GroupPicturesData {
  sectionTitle: string;
  intro: string;
  outro: string;
  images: string[];
}

export interface SiteContent {
  profile: Profile;
  navigation: NavItem[];
  research: ResearchData;
  team: TeamData;
  publications: PublicationsData;
  grantsAndProjects: GrantsAndProjectsData;
  postersAndPresentations: PostersAndPresentationsData;
  teaching: TeachingData;
  groupPictures: GroupPicturesData;
}

export const siteContent: SiteContent = rawContent as SiteContent;
export default siteContent;
