export type Profile = {
  name: string;
  lastName: string;
  username: string;
  signupDate: Date;
  worktime: string;
  uselessSkill: string;
  bioTitle: string;
  obsession: string;
  location: string;
  interests: string;
};

export type Item = { id: keyof Profile; icon: string; label: string };
export type Interest = typeof INTERESTS[number];