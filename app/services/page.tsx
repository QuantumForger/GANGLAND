"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  price: string;
  features: string[];
  roi: string;
  description: string;
}

interface ServiceCardProps extends Service {
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const services: Service[] = [
  {
    id: "1",
    title: "Quantum Algorithm Development",
    price: "$10,000 - $50,000",
    features: [
      "Custom quantum algorithm design",
      "Performance optimization",
      "Integration with classical systems"
    ],
    roi: "20-30% improvement in computational efficiency",
    description: "Our team of expert quantum physicists and computer scientists will develop cutting-edge quantum algorithms tailored to your specific needs. We focus on creating efficient, scalable solutions that can be integrated seamlessly with your existing classical computing infrastructure."
  },
  {
    id: "2",
    title: "Quantum Machine Learning Solutions",
    price: "$15,000 - $75,000",
    features: [
      "Quantum-enhanced ML models",
      "Data preparation for quantum systems",
      "Hybrid quantum-classical ML pipelines"
    ],
    roi: "Up to 40% increase in model accuracy",
    description: "Harness the power of quantum computing to revolutionize your machine learning capabilities. Our quantum ML solutions leverage the unique properties of quantum systems to process complex datasets faster and more accurately than classical methods."
  },
  {
    id: "3",
    title: "Quantum Cryptography Implementation",
    price: "$20,000 - $100,000",
    features: [
      "Quantum key distribution systems",
      "Post-quantum cryptography solutions",
      "Secure quantum communication protocols"
    ],
    roi: "Near-unbreakable encryption for critical data",
    description: "Protect your sensitive data with the ultimate security of quantum cryptography. Our solutions utilize the principles of quantum mechanics to create encryption systems that are theoretically impossible to breach, ensuring the highest level of data protection for your organization."
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, price, features, roi, description, isSelected, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={`w-full ${isSelected ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="mt-2"><strong>ROI:</strong> {roi}</p>
        {isExpanded && (
          <p className="mt-2">{description}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={isSelected ? "secondary" : "default"} onClick={() => onSelect(id)}>
          {isSelected ? 'Selected' : 'Select'}
        </Button>
        <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceSelect = (id: string) => {
    setSelectedService(prevSelected => prevSelected === id ? null : id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isSelected={selectedService === service.id}
            onSelect={handleServiceSelect}
          />
        ))}
      </div>
    </div>
  )
}

