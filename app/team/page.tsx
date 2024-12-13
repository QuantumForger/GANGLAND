import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const teamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    role: 'Quantum AI Researcher',
    bio: 'Alice specializes in quantum machine learning algorithms.',
    imageUrl: '/images/avatar-placeholder.png',
    details: 'Alice has a Ph.D. in Quantum Computing from MIT and has published numerous papers on quantum machine learning.',
  },
  {
    id: '2',
    name: 'Bob Smith',
    role: 'Quantum Hardware Engineer',
    bio: 'Bob designs and optimizes quantum computing hardware.',
    imageUrl: '/images/avatar-placeholder.png',
    details: 'Bob has over 10 years of experience in designing quantum circuits and has patents in quantum error correction.',
  },
  {
    id: '3',
    name: 'Carol Martinez',
    role: 'Quantum Software Developer',
    bio: 'Carol develops quantum algorithms and software applications.',
    imageUrl: '/images/avatar-placeholder.png',
    details: 'Carol is an expert in quantum programming languages and has contributed to several open-source quantum computing projects.',
  },
];

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/team" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Team
      </Link>
      <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{member.role}</p>
          <p className="mb-4">{member.bio}</p>
          <h2 className="text-2xl font-semibold mb-2">Details</h2>
          <p>{member.details}</p>
        </div>
      </div>
    </div>
  );
}
