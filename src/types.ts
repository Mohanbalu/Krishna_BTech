/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Registration {
  id: string;
  fullName: string;
  mobileNumber: string;
  intermediateGroup: string;
  expectedBranch: string;
  timestamp: string;
}

export interface BenefitCard {
  title: string;
  description: string;
}

export interface SubjectCard {
  title: string;
  tech: string;
  syllabus: string[];
  description: string;
  badge: string;
}

export interface WhoShouldJoinItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}
