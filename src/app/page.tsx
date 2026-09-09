'use client';

import Hero from '@/components/Hero';
import Principles from '@/components/Principles';
import Services from '@/components/Services';
import ProcessSteps from '@/components/ProcessSteps';
import ParentsSection from '@/components/ParentsSection';
import FounderSection from '@/components/FounderSection';
import ValuesSection from '@/components/ValuesSection';
import ChecklistSection from '@/components/ChecklistSection';
import FAQAccordion from '@/components/FAQAccordion';
import ConsultationForm from '@/components/ConsultationForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Principles />
      <Services />
      <ProcessSteps />
      <ParentsSection />
      <FounderSection />
      <ValuesSection />
      <ChecklistSection />
      <FAQAccordion />
      <ConsultationForm />
    </>
  );
}
