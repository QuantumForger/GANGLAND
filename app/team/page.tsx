import React from 'react'
import TeamMember from '@/components/TeamMember'

const teamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    role: 'Quantum AI Researcher',
    bio: 'Alice specializes in quantum machine learning algorithms.',
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
  {
    id: '2',
    name: 'Bob Smith',
    role: 'Quantum Hardware Engineer',
    bio: 'Bob designs and optimizes quantum computing hardware.',
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
  {
    id: '3',
    name: 'Carol Martinez',
    role: 'Quantum Software Developer',
    bio: 'Carol develops quantum algorithms and software applications.',
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  )
}

