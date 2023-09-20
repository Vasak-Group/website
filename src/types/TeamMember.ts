export interface TeamMember {
  id: number;
  name: string;
  image: string;
  show: boolean;
  position: string;
  social: Social[];
}
export interface Social {
  id: number;
  url: string;
  icon: string;
}