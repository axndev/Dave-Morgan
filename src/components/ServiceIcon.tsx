import React from 'react';
import {
  AlertTriangle,
  Search,
  Sparkles,
  Wrench,
  Droplets,
  Flame,
  Layers,
  ShieldCheck,
  Zap,
  Gauge,
  Sun,
  Sliders,
  Power,
  Cpu,
  Activity,
  CheckCircle2,
  LucideProps,
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'AlertTriangle':
      return <AlertTriangle {...props} />;
    case 'Search':
      return <Search {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Wrench':
      return <Wrench {...props} />;
    case 'Droplets':
      return <Droplets {...props} />;
    case 'Flame':
      return <Flame {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Gauge':
      return <Gauge {...props} />;
    case 'Sun':
      return <Sun {...props} />;
    case 'Sliders':
      return <Sliders {...props} />;
    case 'Power':
      return <Power {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    default:
      return <Wrench {...props} />;
  }
};
