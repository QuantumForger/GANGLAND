import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMemberProps {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
}

const TeamMember: React.FC<TeamMemberProps> = ({ id, name, role, bio, imageUrl }) => {
  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-muted-foreground mb-4">{role}</p>
        <p className="text-sm mb-4">{bio}</p>
        <Link href={`/team/${id}`} className="text-primary hover:underline">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default TeamMember

