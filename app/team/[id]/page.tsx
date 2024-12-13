'use client'

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamPage = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Alice Quantum',
      role: 'AI Researcher',
      bio: 'Alice specializes in machine learning algorithms for quantum computing.',
      imageUrl: '/images/avatar-placeholder.png',
    },
    {
      id: '2',
      name: 'Bob Nexus',
      role: 'Quantum Architect',
      bio: 'Bob designs quantum systems and optimizes quantum hardware performance.',
      imageUrl: '/images/avatar-placeholder.png',
    },
    {
      id: '3',
      name: 'Carol Martinez',
      role: 'Software Developer',
      bio: 'Carol develops quantum-compatible software solutions.',
      imageUrl: '/images/avatar-placeholder.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="border rounded-lg shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-purple-400 mb-4">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

