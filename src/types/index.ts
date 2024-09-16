export interface interfaceExperience {
  name: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface interfaceExperienceList {
title: string;
details: interfaceExperience[];
}

export interface projects {
name: string;
description: string;
}

export interface projectList {
title: string;
details: projects[];
}