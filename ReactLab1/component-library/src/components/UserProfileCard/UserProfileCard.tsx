import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {/* Avatar and Name */}
      <div className="flex items-center gap-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
            {user.name.charAt(0)}
          </div>
        )}
        <h2 className="text-xl font-semibold">{user.name}</h2>
      </div>

      {/* Optional Fields */}
      <div className="mt-3 space-y-1">
        {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
        {showRole && (
          <p className="text-sm text-gray-500 italic">{user.role}</p>
        )}
      </div>

      {/* Optional Edit Button */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}

      {/* Children */}
      {children}
    </div>
  );
};