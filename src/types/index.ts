export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface JobOfferDTO {
  id: string;
  company: string;
  role: string;
  salary?: number;
  equity?: string;
  bonus?: number;
  location?: string;
  status: string;
  evaluationScore?: number;
  createdAt: Date;
}

export interface NegotiationDTO {
  id: string;
  offerId: string;
  initialSalary: number;
  proposedSalary?: number;
  targetSalary?: number;
  status: string;
  successRate?: number;
  recommendedIncrease?: number;
}

export interface NegotiationStrategy {
  type: 'aggressive' | 'balanced' | 'conservative';
  leveragePoints: string[];
  risks: string[];
  estimatedSuccessRate: number;
  recommendedAsk: number;
  countdownTimeline?: string[];
}

export interface MarketBenchmark {
  role: string;
  location: string;
  experience: number;
  avgSalary: number;
  p25: number;
  p75: number;
  p90: number;
  medianBonus?: number;
}

export interface MockInterviewDTO {
  id: string;
  role: string;
  company?: string;
  type: 'behavioral' | 'technical' | 'both';
  score?: number;
  feedback?: string;
}

export interface CareerPlanDTO {
  id: string;
  horizon: 3 | 5;
  currentRole: string;
  targetRole: string;
  milestones: string[];
  skillGaps: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
