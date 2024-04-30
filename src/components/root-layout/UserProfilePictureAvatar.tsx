import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function UserProfilePictureAvatar() {
  return (
    <Avatar className="w-18 h-9 -mt-4 ml-4">
      <AvatarImage src="https://github.com/shadcn.png" alt="profile pic" />
      <AvatarFallback className="p-2">CN</AvatarFallback>
    </Avatar>
  );
}

export default UserProfilePictureAvatar;
