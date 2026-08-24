export interface SystemCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  diagramType: 'pipeline' | 'matrix' | 'graph' | 'neural';
}

export interface DokusureDocument {
  id: string;
  name: string;
  type: string;
  size: string;
  status: 'validated' | 'processing' | 'extracted';
  fields: {
    label: string;
    value: string;
    confidence: number;
    flag?: 'match' | 'verified' | 'warning';
  }[];
  paarRiskScore: number;
  hsCode: string;
}

export interface ArchitectureNode {
  id: string;
  step: string;
  name: string;
  shortDesc: string;
  specifications: string[];
  throughput: string;
  telemetry: {
    latency: string;
    uptime: string;
    errorRate: string;
  };
}

export interface FrontierSector {
  id: string;
  name: string;
  status: 'BUILDING' | 'EXPLORING' | 'RESEARCHING';
  problemStatement: string;
  systemSolution: string;
  potentialImpact: string;
  tags: string[];
}

export interface ContactInquiry {
  name: string;
  organization: string;
  email: string;
  sector: string;
  problemScope: string;
  timeline: string;
}
