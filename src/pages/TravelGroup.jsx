import { useState } from 'react';
import {
  Users,
  Plus,
  Calendar,
  DollarSign,
  Vote,
  MessageSquare,
  MoreHorizontal,
  ChevronRight,
  UserPlus,
  X,
  CheckCircle,
  MapPin,
  Clock,
  AlignJustify
} from 'lucide-react';

export default function TravelGroup() {
  const [activeTab, setActiveTab] = useState('groups');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDestination, setNewGroupDestination] = useState('');

  // Mock data - In a real app, this would come from your backend
  const myGroups = [
    {
      id: 1,
      name: "Siargao Summer 2024",
      members: 5,
      destination: "Siargao Island",
      nextTrip: "Aug 15-20",
      pendingVotes: 2,
      unreadMessages: 3,
      pendingExpenses: "₱1,200",
      lastActive: "2 hours ago",
      activities: ["Surfing", "Island Hopping", "Beach BBQ"],
      isPremium: true
    },
    {
      id: 2,
      name: "Bohol Weekend Getaway",
      members: 3,
      destination: "Panglao, Bohol",
      nextTrip: "Sep 5-7",
      pendingVotes: 0,
      unreadMessages: 8,
      pendingExpenses: "₱800",
      lastActive: "Yesterday",
      activities: ["Chocolate Hills", "Tarsier Sanctuary"],
      isPremium: false
    }
  ];

  const pendingInvites = [
    {
      id: 101,
      name: "Palawan Adventure",
      invitedBy: "Maria Santos",
      destination: "El Nido, Palawan",
      tripDates: "Oct 10-15"
    }
  ];

  const handleCreateGroup = () => {
    // In a real app, you would send this to your backend
    alert(`Group "${newGroupName}" to ${newGroupDestination} created successfully!`);
    setShowCreateModal(false);
    setNewGroupName('');
    setNewGroupDestination('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Travel Groups</h1>
        <p className="mt-2 text-gray-600">Collaborate with friends and family on your travel plans</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center justify-center gap-2 p-4 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create Group</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <UserPlus className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-600">Join Group</span>
        </button>
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New Travel Group</h3>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="e.g., Summer Vacation 2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  value={newGroupDestination}
                  onChange={(e) => setNewGroupDestination(e.target.value)}
                  placeholder="e.g., Boracay Island"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div className="pt-2">
                <button
                  onClick={handleCreateGroup}
                  disabled={!newGroupName || !newGroupDestination}
                  className={`w-full py-2 rounded-lg font-medium ${
                    newGroupName && newGroupDestination
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('groups')}
          className={`pb-4 px-2 font-medium ${
            activeTab === 'groups'
              ? 'text-amber-500 border-b-2 border-amber-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          My Groups
        </button>
        <button
          onClick={() => setActiveTab('invites')}
          className={`pb-4 px-2 font-medium ${
            activeTab === 'invites'
              ? 'text-amber-500 border-b-2 border-amber-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Invites {pendingInvites.length > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-amber-100 text-amber-600 rounded-full">
              {pendingInvites.length}
            </span>
          )}
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'groups' ? (
        // Groups List
        <div className="space-y-4">
          {myGroups.map(group => (
            <div
              key={group.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                    {group.isPremium && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{group.members} members</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{group.nextTrip}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{group.destination}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4" />
                    <span>Active {group.lastActive}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              
              {/* Activities */}
              {group.activities.length > 0 && (
                <div className="mt-4 px-3 py-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlignJustify className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Planned Activities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.activities.map((activity, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-white text-xs text-gray-600 rounded-md border border-gray-200"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Activity Indicators */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {group.pendingVotes > 0 && (
                  <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                    <Vote className="w-4 h-4" />
                    <span className="text-sm font-medium">{group.pendingVotes} votes</span>
                  </div>
                )}
                {group.unreadMessages > 0 && (
                  <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">{group.unreadMessages} new</span>
                  </div>
                )}
                {group.pendingExpenses && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">{group.pendingExpenses}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                <span className="font-medium">View Group</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* Empty State */}
          {myGroups.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No travel groups yet</h3>
              <p className="text-gray-500 mb-6">Create a group or join one to start planning together</p>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Create Your First Group</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        // Invites List
        <div className="space-y-4">
          {pendingInvites.map(invite => (
            <div
              key={invite.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{invite.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <span className="font-medium text-gray-600">{invite.invitedBy}</span> invited you
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{invite.destination}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{invite.tripDates}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Accept</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <X className="w-4 h-4" />
                  <span className="font-medium">Decline</span>
                </button>
              </div>
            </div>
          ))}

          {pendingInvites.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pending invites</h3>
              <p className="text-gray-500">Share your profile with friends to get invited to travel groups</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
