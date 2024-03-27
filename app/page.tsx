import React from 'react';
import UserCard from '@/components/card';
import { Heading } from 'frosted-ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col max-w-5xl w-full">
        <Heading size="7" my="5">
          User Directory
        </Heading>

        <UserCard 
          avatar="https://avatars.githubusercontent.com/u/1" 
          name="octocat" 
          isAdmin={false} 
          username="octocat"
          createdAt="Jun 10, 2022"
          joinedAt="Mar 10, 2024"
        />
      </div>
    </div>
  );
}
