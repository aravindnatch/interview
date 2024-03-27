import { Globe16 } from '@frosted-ui/icons';
import { Avatar, Card, Text, Badge } from 'frosted-ui';
import React from 'react';

interface CardProps {
  avatar: string;
  name: string;
  isAdmin: boolean;
  username: string;
  createdAt: string;
  joinedAt: string;
}

export default function UserCard({
  avatar,
  name,
  isAdmin,
  username,
  createdAt,
  joinedAt,
}: CardProps) {
  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div>
            <Avatar src={avatar} fallback="avatar" variant='square' />
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex flex-row items-center">
              <Text size="5" weight="bold" className="ml-2">
                {name}
              </Text>
              {
                !isAdmin && (
                  <Badge className="ml-2" color='green'>
                    Admin
                  </Badge>
                )
              }
            </div>
            <Text size="2" className="mt-2">
              @{username}
            </Text>
          </div>
        </div>

        <div className="flex flex-row items-center mt-3 gap-1 opacity-80">
          <Text size="1" className="pr-1" color="gray">
            <div className="flex flex-row gap-1 items-center">
              <Globe16 />
              {createdAt}
            </div>
          </Text>
          <Text size="1" color="gray">
            <div className="flex flex-row gap-1 items-center">
              <Globe16 />
              {joinedAt}
            </div>
          </Text>
        </div>
      </div>
    </Card>
  );
}
